import createGaragePage from '../garagePage/createGarapePage';
import { getCars, getURL } from './get';
import { AddedCar, Cars } from '../interfaces';
import { carsPerPage } from '../constants';

export default async function addNewCar(): Promise<void> {
  const carNameInput: HTMLInputElement | null = document.querySelector('#carNameInput');
  const carColorInput: HTMLInputElement | null = document.querySelector('#carColorInput');
  const currentPage: string | null = localStorage.getItem('page');
  const cars: Cars[] = await getCars();
  const carsNumber = cars.length;

  const addedCar: AddedCar = {
    name: carNameInput?.value,
    color: carColorInput?.value,
  };

  await fetch(getURL('garage'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(addedCar),
  });

  if (currentPage && (carsNumber + 1) % carsPerPage === 1) localStorage.setItem('page', `${+currentPage + 1}`);

  document.body.innerHTML = '';
  createGaragePage();
}

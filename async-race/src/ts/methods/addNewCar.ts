import createGaragePage from '../garagePage/createGarapePage';
import { getCars } from './get';
import { AddedCar } from '../interfaces';

export default async function addNewCar(): Promise<void> {
  const carNameInput: HTMLInputElement | null = document.querySelector('#carNameInput');
  const carColorInput: HTMLInputElement | null = document.querySelector('#carColorInput');
  const currentPage: string | null = localStorage.getItem('page');
  const cars = await getCars();
  const carsNumber = cars.length;

  const addedCar: AddedCar = {
    name: carNameInput?.value,
    color: carColorInput?.value,
  };

  await fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(addedCar),
  });

  if (currentPage && (carsNumber + 1) % 7 === 1) localStorage.setItem('page', `${+currentPage + 1}`);

  document.body.innerHTML = '';
  createGaragePage();
}

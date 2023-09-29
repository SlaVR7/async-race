import { getCars, getURL } from '../methods/get';
import createGaragePage from './createGarapePage';
import getRandomRGB from '../createRandomRgb';
import { AddedCar, Cars } from '../interfaces';
import { CARS_PER_PAGE, FIRST_NAMES, SECOND_NAMES } from '../constants';

export default async function generateCars(): Promise<void> {
  const currentPage: string | null = localStorage.getItem('page');
  const cars: Cars[] = await getCars();
  const carsNumber: number = cars.length;

  const addCarRequests: Promise<Response>[] = [];
  const numCarsToAdd: number = 100;

  for (let i: number = 0; i < numCarsToAdd; i += 1) {
    const randomName: string = `${FIRST_NAMES[Math.floor(Math.random() * 10)]} ${SECOND_NAMES[Math.floor(Math.random() * 10)]}`;
    const randomColor: string = getRandomRGB();

    const addedCar: AddedCar = {
      name: randomName,
      color: randomColor,
    };

    addCarRequests.push(
      fetch(getURL('garage'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addedCar),
      }),
    );
  }
  await Promise.all(addCarRequests);

  if (currentPage && (carsNumber + 1) % CARS_PER_PAGE === 1) localStorage.setItem('page', `${+currentPage + 1}`);

  document.body.innerHTML = '';
  createGaragePage();
}

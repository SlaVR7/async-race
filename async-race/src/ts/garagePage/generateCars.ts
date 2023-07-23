import { getCars } from '../methods/get';
import createGaragePage from './createGarapePage';
import getRandomRGB from '../createRandomRgb';
import { AddedCar } from '../interfaces';

export default async function generateCars(): Promise<void> {
  const currentPage: string | null = localStorage.getItem('page');
  const cars = await getCars();
  const carsNumber = cars.length;

  const addCarRequests: Promise<Response>[] = [];
  const firstNames: string[] = ['Tesla', 'BMW', 'Audi', 'Mitsubishi', 'Renault', 'Lamborghini', 'Mercedes', 'Lada', 'Volvo', 'Fiat'];
  const secondNames: string[] = ['Lancer', 'Logan', 'Aventador', 'E200', 'M4', 'A8', 'Priora', 'S40', '123', 'ModelS'];
  const numCarsToAdd: number = 100;
  const carsPerPage: number = 7;

  for (let i: number = 0; i < numCarsToAdd; i += 1) {
    const randomName: string = `${firstNames[Math.floor(Math.random() * 10)]} ${secondNames[Math.floor(Math.random() * 10)]}`;
    const randomColor: string = getRandomRGB();

    const addedCar: AddedCar = {
      name: randomName,
      color: randomColor,
    };

    addCarRequests.push(
      fetch('http://127.0.0.1:3000/garage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(addedCar),
      }),
    );
  }
  await Promise.all(addCarRequests);

  if (currentPage && (carsNumber + 1) % carsPerPage === 1) localStorage.setItem('page', `${+currentPage + 1}`);

  document.body.innerHTML = '';
  createGaragePage();
}

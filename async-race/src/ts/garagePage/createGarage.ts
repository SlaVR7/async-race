import { getCars } from '../methods/get';
import createCar from './createCar';

export default async function createGarage(): Promise<void> {
  if (!localStorage.getItem('page')) localStorage.setItem('page', '1');
  const page: string | null = localStorage.getItem('page');
  const carPerPage: number = 7;
  const garageWrapper: HTMLDivElement = document.createElement('div');

  const winnerMessage: HTMLDivElement = document.createElement('div');
  winnerMessage.classList.add('winnerMessage');

  const numberOfCars = await getCars();

  const garageTitle: HTMLHeadingElement = document.createElement('h2');
  garageTitle.innerText = `Garage (${numberOfCars.length})`;

  const pageNumber: HTMLHeadingElement = document.createElement('h3');
  pageNumber.innerText = `Page #${page}`;

  const carsContainer: HTMLDivElement = document.createElement('div');
  carsContainer.classList.add('carsContainer');

  document.body.append(garageWrapper);
  garageWrapper.append(winnerMessage, garageTitle, pageNumber, carsContainer);

  const cars = await getCars();

  if (page) {
    const initialCar: number = 7 * (+page - 1);

    for (let i: number = initialCar; i < initialCar + carPerPage; i += 1) {
      createCar(i, cars);
    }
  }
}

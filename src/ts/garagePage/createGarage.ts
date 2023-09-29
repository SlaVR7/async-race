import createCar from './createCar';
import { Cars } from '../interfaces';
import { CARS_PER_PAGE } from '../constants';

export default async function createGarage(cars: Cars[]): Promise<void> {
  if (!localStorage.getItem('page')) localStorage.setItem('page', '1');
  const page: string | null = localStorage.getItem('page');
  const garageWrapper: HTMLDivElement = document.createElement('div');

  const winnerMessage: HTMLDivElement = document.createElement('div');
  winnerMessage.classList.add('winnerMessage');

  const garageTitle: HTMLHeadingElement = document.createElement('h2');
  garageTitle.innerText = `Garage (${cars.length})`;

  const pageNumber: HTMLHeadingElement = document.createElement('h3');
  pageNumber.innerText = `Page #${page}`;

  const carsContainer: HTMLDivElement = document.createElement('div');
  carsContainer.classList.add('carsContainer');

  document.body.append(garageWrapper);
  garageWrapper.append(winnerMessage, garageTitle, pageNumber, carsContainer);

  if (page) {
    const initialCar: number = CARS_PER_PAGE * (+page - 1);

    for (let i: number = initialCar; i < initialCar + CARS_PER_PAGE; i += 1) {
      createCar(i, cars);
    }
  }
}

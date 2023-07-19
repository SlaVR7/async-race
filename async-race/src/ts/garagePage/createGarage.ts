import { getCars } from '../methods/get';
import createCar from './createCar';

export default async function createGarage() {
  if (!localStorage.getItem('page')) localStorage.setItem('page', '1');
  const page = localStorage.getItem('page');
  const carPerPage: number = 7;
  const garageWrapper: HTMLDivElement = document.createElement('div');

  const numberOfCars = await getCars();

  const garageTitle: HTMLHeadingElement = document.createElement('h2');
  garageTitle.innerText = `Garage (${numberOfCars.length})`;

  const pageNumber: HTMLHeadingElement = document.createElement('h3');
  pageNumber.innerText = `Page #${page}`;

  const carsContainer: HTMLDivElement = document.createElement('div');
  carsContainer.classList.add('carsContainer');

  document.body.appendChild(garageWrapper);
  garageWrapper.appendChild(garageTitle);
  garageWrapper.appendChild(pageNumber);
  garageWrapper.appendChild(carsContainer);

  if (page) {
    const initialCar: number = 7 * (+page - 1);

    for (let i = initialCar; i < initialCar + carPerPage; i += 1) {
      await createCar(i);
    }
  }
}

import { getCars } from '../methods/getCars';
import createCar from './createCar';

export default async function createGarage() {
  const garageWrapper: HTMLDivElement = document.createElement('div');

  const numberOfCars = await getCars();

  const garageTitle: HTMLHeadingElement = document.createElement('h2');
  garageTitle.innerText = `Garage (${numberOfCars.length})`;

  const pageNumber: HTMLHeadingElement = document.createElement('h3');
  pageNumber.innerText = 'Page #1';

  const carsContainer: HTMLDivElement = document.createElement('div');
  carsContainer.classList.add('carsContainer');

  document.body.appendChild(garageWrapper);
  garageWrapper.appendChild(garageTitle);
  garageWrapper.appendChild(pageNumber);
  garageWrapper.appendChild(carsContainer);

  for (let i = 0; i < numberOfCars.length; i += 1) {
    await createCar(i);
  }
}

import { getCars } from '../methods/get';
import car from '../svgImages/carImage';
import flag from '../svgImages/flagImage';

export default async function createCar(carNumber: number) {
  const cars = await getCars();
  if (cars.length <= carNumber) return;

  const selectCarButton: HTMLButtonElement = document.createElement('button');
  selectCarButton.className = 'smallMargins selectCarButton';
  selectCarButton.innerText = 'SELECT';

  const removeCarButton: HTMLButtonElement = document.createElement('button');
  removeCarButton.className = 'smallMargins removeCarButton';
  removeCarButton.innerText = 'REMOVE';

  const carName: HTMLSpanElement = document.createElement('span');
  carName.innerText = cars[carNumber].name;

  const startCarButton: HTMLButtonElement = document.createElement('button');
  startCarButton.className = 'smallMargins startButton';
  startCarButton.innerText = 'START';

  const stopCarButton: HTMLButtonElement = document.createElement('button');
  stopCarButton.className = 'smallMargins stopButton';
  stopCarButton.innerText = 'STOP';
  stopCarButton.setAttribute('disabled', 'true');

  const road: HTMLDivElement = document.createElement('div');
  road.classList.add('road');

  const carImage: HTMLDivElement = document.createElement('div');
  carImage.classList.add('car');
  carImage.innerHTML = car.replace('currentColor', `${cars[carNumber].color}`);

  const flagImage: HTMLDivElement = document.createElement('div');
  flagImage.classList.add('flag');
  flagImage.innerHTML = flag;

  road.appendChild(carImage);
  road.appendChild(flagImage);

  const border: HTMLDivElement = document.createElement('div');
  border.classList.add('border');

  const carsContainer: HTMLDivElement | null = document.querySelector('.carsContainer');
  const carWrapper: HTMLDivElement = document.createElement('div');
  carWrapper.classList.add('carWrapper');
  carWrapper.setAttribute('carId', `${cars[carNumber].id}`);
  carWrapper.appendChild(carName);
  carWrapper.appendChild(selectCarButton);
  carWrapper.appendChild(removeCarButton);
  carWrapper.appendChild(startCarButton);
  carWrapper.appendChild(stopCarButton);
  carWrapper.appendChild(road);
  carWrapper.appendChild(border);
  if (carsContainer) carsContainer.appendChild(carWrapper);
}

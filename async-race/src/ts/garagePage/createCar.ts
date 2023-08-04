import car from '../svgImages/carImage';
import flag from '../svgImages/flagImage';
import { Cars } from '../interfaces';

function createButtons(): HTMLButtonElement[] {
  const selectCarButton: HTMLButtonElement = document.createElement('button');
  selectCarButton.className = 'smallMargins selectCarButton';
  selectCarButton.innerText = 'SELECT';

  const removeCarButton: HTMLButtonElement = document.createElement('button');
  removeCarButton.className = 'smallMargins removeCarButton';
  removeCarButton.innerText = 'REMOVE';

  const startCarButton: HTMLButtonElement = document.createElement('button');
  startCarButton.className = 'smallMargins startButton';
  startCarButton.innerText = 'START';

  const stopCarButton: HTMLButtonElement = document.createElement('button');
  stopCarButton.className = 'smallMargins stopButton';
  stopCarButton.innerText = 'STOP';
  stopCarButton.setAttribute('disabled', 'true');

  return [selectCarButton, removeCarButton, startCarButton, stopCarButton];
}

function createRoadImage(): HTMLDivElement {
  const road: HTMLDivElement = document.createElement('div');
  road.classList.add('road');

  return road;
}

function createFlagImage(): HTMLDivElement {
  const flagImage: HTMLDivElement = document.createElement('div');
  flagImage.classList.add('flag');
  flagImage.innerHTML = flag;

  return flagImage;
}

function createBorderImage(): HTMLDivElement {
  const border: HTMLDivElement = document.createElement('div');
  border.classList.add('border');

  return border;
}

export default function createCar(carNumber: number, cars: Cars[]): void {
  if (cars.length <= carNumber) return;

  const buttons: HTMLButtonElement[] = createButtons();
  const road: HTMLDivElement = createRoadImage();

  const carName: HTMLSpanElement = document.createElement('span');
  carName.innerText = cars[carNumber].name;

  const carImage: HTMLDivElement = document.createElement('div');
  carImage.classList.add('car');
  carImage.innerHTML = car.replace('currentColor', `${cars[carNumber].color}`);

  road.append(carImage, createFlagImage());

  const carsContainer: HTMLDivElement | null = document.querySelector('.carsContainer');
  const carWrapper: HTMLDivElement = document.createElement('div');
  carWrapper.classList.add('carWrapper');
  carWrapper.setAttribute('carId', `${cars[carNumber].id}`);
  carWrapper
    .append(carName, buttons[0], buttons[1], buttons[2], buttons[3], road, createBorderImage());

  if (carsContainer) carsContainer.appendChild(carWrapper);
}

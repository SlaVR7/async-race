import createWinnersPage from '../winnersPage/createWinnersPage';
import createGaragePage from '../garagePage/createGarapePage';
import addNewCar from './addNewCar';
import removeCar from './removeCar';
import selectCar from './selectCar';
import updateCar from './update';
import {
  openPrevGarPage, openNextGarPage, openPrevWinPage, openNextWinPage,
} from './changePage';
import generateCars from '../garagePage/generateCars';
import startCar from './startCar';
import startRace from './startRace';

export default function addButtonsListeners(): void {
  const garageButton: HTMLButtonElement | null = document.querySelector('#garageBtn');
  const winnersButton: HTMLButtonElement | null = document.querySelector('#winnersButton');
  const createCarButton: HTMLButtonElement | null = document.querySelector('#createCarButton');
  const removeButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.removeCarButton');
  const selectButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.selectCarButton');
  const updateButton: HTMLButtonElement | null = document.querySelector('.updateBtn');
  const generateButton: HTMLButtonElement | null = document.querySelector('#generateCars');
  const prevGaragePage: HTMLButtonElement | null = document.querySelector('#prevGaragePage');
  const nextGaragePage: HTMLButtonElement | null = document.querySelector('#nextGaragePage');
  const prevWinnersPage: HTMLButtonElement | null = document.querySelector('#prevWinnersButton');
  const nextWinnersPage: HTMLButtonElement | null = document.querySelector('#nextWinnersButton');
  const startButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.startButton');
  const startRaceButton: HTMLButtonElement | null = document.querySelector('#startRaceButton');
  const nameInput: HTMLInputElement | null = document.querySelector('#carNameInput');
  const colorInput: HTMLInputElement | null = document.querySelector('#carColorInput');

  garageButton?.addEventListener('click', (): void => {
    document.body.innerHTML = '';
    createGaragePage();
    localStorage.setItem('pageType', 'garage');
  });
  winnersButton?.addEventListener('click', (): void => {
    document.body.innerHTML = '';
    createWinnersPage();
    localStorage.setItem('pageType', 'winners');
  });
  nameInput?.addEventListener('change', () => localStorage.setItem('nameInput', nameInput.value));
  colorInput?.addEventListener('change', () => localStorage.setItem('colorInput', colorInput.value));
  generateButton?.addEventListener('click', generateCars);
  createCarButton?.addEventListener('click', addNewCar);
  removeButtons.forEach((removeBtn: HTMLButtonElement) => removeBtn.addEventListener('click', (event: MouseEvent) => removeCar(event)));
  selectButtons.forEach((selectBtn: HTMLButtonElement) => selectBtn.addEventListener('click', (event: MouseEvent) => selectCar(event)));
  updateButton?.addEventListener('click', updateCar);
  prevGaragePage?.addEventListener('click', openPrevGarPage);
  nextGaragePage?.addEventListener('click', openNextGarPage);
  prevWinnersPage?.addEventListener('click', openPrevWinPage);
  nextWinnersPage?.addEventListener('click', openNextWinPage);
  startButtons.forEach((startBtn: HTMLButtonElement) => startBtn.addEventListener('click', (event: MouseEvent) => startCar(event)));
  startRaceButton?.addEventListener('click', startRace);
}

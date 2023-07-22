import createWinnersPage from '../winnersPage/createWinnersPage';
import createGaragePage from '../garagePage/createGarapePage';
import addNewCar from './addNewCar';
import removeCar from './removeCar';
import selectCar from './selectCar';
import updateCar from './update';
import { openPrevGarPage, openNextGarPage, openPrevWinPage, openNextWinPage } from './changePage';
import generateCars from "../garagePage/generateCars";
import startCar from "./startCar";
import startRace from "./startRace";
import createTable from "../winnersPage/createTable";

export default function addButtonsListeners(): void {
  const garageButton: HTMLButtonElement | null = document.querySelector('#garageBtn');
  const winnersButton: HTMLButtonElement | null = document.querySelector('#winnersButton');
  const createCarButton: HTMLButtonElement | null = document.querySelector('#createCarButton');
  const removeButtons = document.querySelectorAll('.removeCarButton');
  const selectButtons = document.querySelectorAll('.selectCarButton');
  const updateButton = document.querySelector('.updateBtn');
  const generateButton = document.querySelector('#generateCars');
  const prevGaragePage = document.querySelector('#prevGaragePage');
  const nextGaragePage = document.querySelector('#nextGaragePage');
  const prevWinnersPage = document.querySelector('#prevWinnersButton');
  const nextWinnersPage = document.querySelector('#nextWinnersButton');
  const startButtons = document.querySelectorAll('.startButton');
  const startRaceButton = document.querySelector('#startRaceButton');
  const nameInput: HTMLInputElement | null = document.querySelector('#carNameInput');
  const colorInput: HTMLInputElement | null = document.querySelector('#carColorInput');

  nameInput?.addEventListener('change', () => localStorage.setItem('nameInput', nameInput.value));
  colorInput?.addEventListener('change', () => localStorage.setItem('colorInput', colorInput.value));

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

  generateButton?.addEventListener('click', generateCars);

  createCarButton?.addEventListener('click', () => addNewCar());

  removeButtons.forEach((item) => {
    item.addEventListener('click', (event) => removeCar(event));
  });

  selectButtons.forEach((item) => {
    item.addEventListener('click', (event) => selectCar(event));
  });

  updateButton?.addEventListener('click', updateCar);

  prevGaragePage?.addEventListener('click', openPrevGarPage);
  nextGaragePage?.addEventListener('click', openNextGarPage);

  prevWinnersPage?.addEventListener('click', openPrevWinPage);
  nextWinnersPage?.addEventListener('click', openNextWinPage);

  startButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => startCar(event));
  });

  startRaceButton?.addEventListener('click', startRace);

}

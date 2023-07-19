import createWinnersPage from '../winnersPage/createWinnersPage';
import createGaragePage from '../garagePage/createGarapePage';
import addNewCar from './addNewCar';
import removeCar from './removeCar';
import selectCar from './selectCar';
import updateCar from './update';
import { openPrevGarPage, openNextGarPage, openPrevWinPage, openNextWinPage } from './changePage';

export default function addButtonsListeners(): void {
  const garageButton: HTMLButtonElement | null = document.querySelector('#garageBtn');
  const winnersButton: HTMLButtonElement | null = document.querySelector('#winnersButton');
  const createCarButton: HTMLButtonElement | null = document.querySelector('#createCarButton');
  const removeButtons = document.querySelectorAll('.removeCarButton');
  const selectButtons = document.querySelectorAll('.selectCarButton');
  const updateButton = document.querySelector('.updateBtn');
  const prevGaragePage = document.querySelector('#prevGaragePage');
  const nextGaragePage = document.querySelector('#nextGaragePage');
  const prevWinnersPage = document.querySelector('#prevWinnersButton');
  const nextWinnersPage = document.querySelector('#nextWinnersButton');

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
}

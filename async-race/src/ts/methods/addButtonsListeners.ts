import createWinnersPage from '../winnersPage/createWinnersPage';
import createGaragePage from '../garagePage/createGarapePage';
import addNewCar from './addNewCar';
import removeCar from './removeCar';
import selectCar from './selectCar';
import updateCar from './update';

export default function addButtonsListeners(): void {
  const garageButton: HTMLButtonElement | null = document.querySelector('#garageBtn');
  const winnersButton: HTMLButtonElement | null = document.querySelector('#winnersButton');
  const createCarButton: HTMLButtonElement | null = document.querySelector('#createCarButton');
  const removeButtons = document.querySelectorAll('.removeCarButton');
  const selectButtons = document.querySelectorAll('.selectCarButton');
  const updateButton = document.querySelector('.updateBtn');

  garageButton?.addEventListener('click', (): void => {
    document.body.innerHTML = '';
    createGaragePage();
  });

  winnersButton?.addEventListener('click', (): void => {
    document.body.innerHTML = '';
    createWinnersPage();
  });

  createCarButton?.addEventListener('click', () => addNewCar());

  removeButtons.forEach((item) => {
    item.addEventListener('click', (event) => removeCar(event));
  });

  selectButtons.forEach((item) => {
    item.addEventListener('click', (event) => selectCar(event));
  });

  updateButton?.addEventListener('click', updateCar);
}

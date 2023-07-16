import createWinnersPage from '../winnersPage/createWinnersPage';
import createGaragePage from './createGarapePage';

export default function addGarageWinnersBtnListeners(): void {
  const garageButton: HTMLButtonElement | null = document.querySelector('#garageBtn');
  const winnersButton: HTMLButtonElement | null = document.querySelector('#winnersButton');

  if (garageButton) {
    garageButton.addEventListener('click', (): void => {
      document.body.innerHTML = '';
      createGaragePage();
    });
  }

  if (winnersButton) {
    winnersButton.addEventListener('click', (): void => {
      document.body.innerHTML = '';
      createWinnersPage();
    });
  }
}

import { getWinners } from '../methods/get';
import { Winners } from '../interfaces';
import { createNextPageButton, createPrevPageButton } from '../garagePage/createGarageFooter';

export default async function createWinnersFooter(): Promise<void> {
  const prevPageButton: HTMLButtonElement = createPrevPageButton('prevWinnersButton');
  const nextPageButton: HTMLButtonElement = createNextPageButton('nextWinnersButton');

  if (localStorage.getItem('winnersPage') === '1') {
    prevPageButton.disabled = true;
  }

  const currentPage: string | null = localStorage.getItem('winnersPage');
  const winnersNumber: Winners[] = await getWinners();
  if (currentPage && +currentPage === Math.ceil(winnersNumber.length / 10)) {
    nextPageButton.disabled = true;
  }

  document.body.append(prevPageButton, nextPageButton);
}

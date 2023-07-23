import { getWinners } from '../methods/get';
import { Winners } from '../interfaces';

export default async function createWinnersFooter(): Promise<void> {
  const prevPageButton: HTMLButtonElement = document.createElement('button');
  prevPageButton.classList.add('smallMargins');
  prevPageButton.id = 'prevWinnersButton';
  prevPageButton.innerText = 'PREV PAGE';

  const nextPageButton: HTMLButtonElement = document.createElement('button');
  nextPageButton.classList.add('smallMargins');
  nextPageButton.id = 'nextWinnersButton';
  nextPageButton.innerText = 'NEXT PAGE';

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

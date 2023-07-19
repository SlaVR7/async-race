import { getWinners } from '../methods/get';

export default async function createWinnersFooter() {
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
  const winnersNumber = await getWinners();
  if (currentPage && +currentPage === Math.ceil(winnersNumber.length / 10)) {
    nextPageButton.disabled = true;
  }

  document.body.appendChild(prevPageButton);
  document.body.appendChild(nextPageButton);
}

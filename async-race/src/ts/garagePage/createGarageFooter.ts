import { getCars } from '../methods/get';

export default async function createGarageFooter(): Promise<void> {
  const prevPageButton: HTMLButtonElement = document.createElement('button');
  prevPageButton.classList.add('smallMargins');
  prevPageButton.id = 'prevGaragePage';
  prevPageButton.innerText = 'PREV PAGE';

  const nextPageButton: HTMLButtonElement = document.createElement('button');
  nextPageButton.classList.add('smallMargins');
  nextPageButton.id = 'nextGaragePage';
  nextPageButton.innerText = 'NEXT PAGE';

  if (localStorage.getItem('page') === '1') {
    prevPageButton.disabled = true;
  }

  const currentPage: string | null = localStorage.getItem('page');
  const carsNumber = await getCars();
  if (currentPage && +currentPage === Math.ceil(carsNumber.length / 7)) {
    nextPageButton.disabled = true;
  }

  document.body.append(prevPageButton, nextPageButton);
}

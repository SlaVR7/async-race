import { Cars } from '../interfaces';
import { CARS_PER_PAGE } from '../constants';

export function createPrevPageButton(id: string): HTMLButtonElement {
  const button: HTMLButtonElement = document.createElement('button');
  button.classList.add('smallMargins');
  button.id = id;
  button.innerText = 'PREV PAGE';

  return button;
}

export function createNextPageButton(id: string): HTMLButtonElement {
  const button: HTMLButtonElement = document.createElement('button');
  button.classList.add('smallMargins');
  button.id = id;
  button.innerText = 'NEXT PAGE';

  return button;
}

export default async function createGarageFooter(cars: Cars[]): Promise<void> {
  const nextPageButton: HTMLButtonElement = createNextPageButton('nextGaragePage');
  const prevPageButton: HTMLButtonElement = createPrevPageButton('prevGaragePage');

  if (localStorage.getItem('page') === '1') {
    prevPageButton.disabled = true;
  }

  const currentPage: string | null = localStorage.getItem('page');

  if (currentPage && +currentPage === Math.ceil(cars.length / CARS_PER_PAGE)) {
    nextPageButton.disabled = true;
  }

  document.body.append(prevPageButton, nextPageButton);
}

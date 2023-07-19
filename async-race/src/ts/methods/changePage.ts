import createGaragePage from '../garagePage/createGarapePage';
import {getCars, getWinners} from "./get";
import createWinnersPage from "../winnersPage/createWinnersPage";

export function openPrevGarPage(): void {
  const currentPage: string | null = localStorage.getItem('page');
  if (!currentPage || currentPage === '1') return;
  localStorage.setItem('page', `${+currentPage - 1}`);
  document.body.innerHTML = '';
  createGaragePage();
}

export async function openNextGarPage() {
  const currentPage: string | null = localStorage.getItem('page');
  const carsNumber = await getCars();
  if (currentPage && +currentPage === Math.ceil(carsNumber.length / 7)) return;
  if (currentPage) localStorage.setItem('page', `${+currentPage + 1}`);
  document.body.innerHTML = '';
  createGaragePage();
}

export function openPrevWinPage(): void {
  const currentPage: string | null = localStorage.getItem('winnersPage');
  if (!currentPage || currentPage === '1') return;
  localStorage.setItem('winnersPage', `${+currentPage - 1}`);
  document.body.innerHTML = '';
  createWinnersPage();
}

export async function openNextWinPage() {
  const currentPage: string | null = localStorage.getItem('winnersPage');
  const winsNumber = await getWinners();
  if (currentPage && +currentPage === Math.ceil(winsNumber.length / 10)) return;
  if (currentPage) localStorage.setItem('winnersPage', `${+currentPage + 1}`);
  document.body.innerHTML = '';
  createWinnersPage();
}

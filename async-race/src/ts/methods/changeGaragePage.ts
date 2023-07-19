import createGaragePage from '../garagePage/createGarapePage';
import {getCars} from "./get";

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

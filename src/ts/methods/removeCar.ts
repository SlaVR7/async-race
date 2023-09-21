import createGaragePage from '../garagePage/createGarapePage';
import { getCars, getURL } from './get';
import { Cars } from '../interfaces';
import { carsPerPage } from '../constants';

export default async function removeCar(event: Event): Promise<void> {
  if (event.target instanceof Element) {
    const carWrapper: HTMLElement | null = event.target.parentElement;
    const carWrapperId: string | null | undefined = carWrapper?.getAttribute('carId');
    const currentPage: string | null = localStorage.getItem('page');
    const cars: Cars[] = await getCars();
    const carsNumber: number = cars.length;

    await fetch(`${getURL('garage')}/${carWrapperId}`, { method: 'DELETE' });
    await fetch(`${getURL('winners')}/${carWrapperId}`, { method: 'DELETE' });

    if (currentPage && !((carsNumber - 1) % carsPerPage) && currentPage !== '1') localStorage.setItem('page', `${+currentPage - 1}`);

    document.body.innerHTML = '';
    createGaragePage();
  }
}

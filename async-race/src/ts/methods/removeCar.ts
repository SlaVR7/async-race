import createGaragePage from '../garagePage/createGarapePage';
import { getCars } from './get';
import { Cars } from '../interfaces';

export default async function removeCar(event: Event): Promise<void> {
  if (event.target instanceof Element) {
    const carWrapper: HTMLElement | null = event.target.parentElement;
    const carWrapperId: string | null | undefined = carWrapper?.getAttribute('carId');
    const currentPage: string | null = localStorage.getItem('page');
    const cars: Cars[] = await getCars();
    const carsNumber: number = cars.length;

    await fetch(`http://127.0.0.1:3000/garage/${carWrapperId}`, { method: 'DELETE' });
    await fetch(`http://127.0.0.1:3000/winners/${carWrapperId}`, { method: 'DELETE' });

    if (currentPage && !((carsNumber - 1) % 7) && currentPage !== '1') localStorage.setItem('page', `${+currentPage - 1}`);

    document.body.innerHTML = '';
    createGaragePage();
  }
}

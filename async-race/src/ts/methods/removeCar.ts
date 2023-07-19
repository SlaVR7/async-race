import createGaragePage from '../garagePage/createGarapePage';
import { getCars } from './get';

export default async function removeCar(event: Event) {
  if (event.target instanceof Element) {
    const carWrapper = event.target.parentElement;
    const carWrapperId = carWrapper?.getAttribute('carId');
    const currentPage = localStorage.getItem('page');
    const cars = await getCars();
    const carsNumber = cars.length;

    await fetch(`http://127.0.0.1:3000/garage/${carWrapperId}`, { method: 'DELETE' });
    await fetch(`http://127.0.0.1:3000/winners/${carWrapperId}`, { method: 'DELETE' });

    if (currentPage && !((carsNumber - 1) % 7) && currentPage !== '1') localStorage.setItem('page', `${+currentPage - 1}`);

    document.body.innerHTML = '';
    createGaragePage();
  }
}

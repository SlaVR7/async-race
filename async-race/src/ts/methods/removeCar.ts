import createGaragePage from '../garagePage/createGarapePage';

export default async function removeCar(event: Event) {
  if (event.target instanceof Element) {
    const carWrapper = event.target.parentElement;
    const carWrapperId = carWrapper?.getAttribute('carId');

    await fetch(`http://127.0.0.1:3000/garage/${carWrapperId}`, { method: 'DELETE' });
    await fetch(`http://127.0.0.1:3000/winners/${carWrapperId}`, { method: 'DELETE' });

    document.body.innerHTML = '';
    createGaragePage();
  }
}

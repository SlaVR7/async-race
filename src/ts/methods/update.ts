import createGaragePage from '../garagePage/createGarapePage';
import { UpdatedCar } from '../interfaces';
import { getURL } from './get';

export default async function updateCar(): Promise<void> {
  const carNameInput: HTMLInputElement | null = document.querySelector('#carNameInput');
  const carColorInput: HTMLInputElement | null = document.querySelector('#carColorInput');
  const selectedCar: HTMLDivElement | null = document.querySelector('.selectAnimate');
  const id: string | null | undefined = selectedCar?.getAttribute('carId');

  const updatedCar: UpdatedCar = {
    name: carNameInput?.value,
    color: carColorInput?.value,
  };

  await fetch(`${getURL('garage')}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedCar),
  });

  document.body.innerHTML = '';
  createGaragePage();
}

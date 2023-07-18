import createGaragePage from '../garagePage/createGarapePage';

export default async function updateCar() {
  const carNameInput: HTMLInputElement | null = document.querySelector('#carNameInput');
  const carColorInput: HTMLInputElement | null = document.querySelector('#carColorInput');
  const selectedCar = document.querySelector('.selectAnimate');
  const id = selectedCar?.getAttribute('carId');

  const updatedCar = {
    name: carNameInput?.value,
    color: carColorInput?.value,
  };

  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedCar),
  });

  document.body.innerHTML = '';
  createGaragePage();
}

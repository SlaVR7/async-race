import createGaragePage from '../garagePage/createGarapePage';

export default async function addNewCar() {
  const carNameInput: HTMLInputElement | null = document.querySelector('#carNameInput');
  const carColorInput: HTMLInputElement | null = document.querySelector('#carColorInput');

  const addedCar = {
    name: carNameInput?.value,
    color: carColorInput?.value,
  };

  await fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(addedCar),
  });

  document.body.innerHTML = '';
  createGaragePage();
}

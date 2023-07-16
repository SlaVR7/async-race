export default function createCreateBlock(): void {
  const createBlockWrapper: HTMLDivElement = document.createElement('div');

  const carNameInput: HTMLInputElement = document.createElement('input');
  carNameInput.setAttribute('type', 'text');
  carNameInput.classList.add('smallMargins');

  const carColorInput: HTMLInputElement = document.createElement('input');
  carColorInput.setAttribute('type', 'color');
  carColorInput.classList.add('smallMargins');

  const createCarButton: HTMLButtonElement = document.createElement('button');
  createCarButton.classList.add('smallMargins');
  createCarButton.innerText = 'CREATE CAR';

  const updateCarButton: HTMLButtonElement = document.createElement('button');
  updateCarButton.classList.add('smallMargins');
  updateCarButton.innerText = 'UPDATE CAR';

  document.body.appendChild(createBlockWrapper);
  createBlockWrapper.appendChild(carNameInput);
  createBlockWrapper.appendChild(carColorInput);
  createBlockWrapper.appendChild(createCarButton);
  createBlockWrapper.appendChild(updateCarButton);
}

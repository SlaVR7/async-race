export default function createCreateBlock(): void {
  const createBlockWrapper: HTMLDivElement = document.createElement('div');

  const carNameInput: HTMLInputElement = document.createElement('input');
  carNameInput.setAttribute('type', 'text');
  carNameInput.classList.add('smallMargins');
  carNameInput.id = 'carNameInput';
  const nameValue: string | null = localStorage.getItem('nameInput');
  if (nameValue !== null) {
    carNameInput.value = nameValue;
  }

  const carColorInput: HTMLInputElement = document.createElement('input');
  carColorInput.setAttribute('type', 'color');
  carColorInput.classList.add('smallMargins');
  carColorInput.id = 'carColorInput';
  const colorValue: string | null = localStorage.getItem('colorInput');
  if (colorValue !== null) {
    carColorInput.value = colorValue;
  }

  const createCarButton: HTMLButtonElement = document.createElement('button');
  createCarButton.classList.add('smallMargins');
  createCarButton.innerText = 'CREATE CAR';
  createCarButton.id = 'createCarButton';

  const updateCarButton: HTMLButtonElement = document.createElement('button');
  updateCarButton.className = 'smallMargins updateBtn';
  updateCarButton.innerText = 'UPDATE CAR';
  updateCarButton.disabled = true;

  document.body.appendChild(createBlockWrapper);
  createBlockWrapper.append(carNameInput, carColorInput, createCarButton, updateCarButton);
}

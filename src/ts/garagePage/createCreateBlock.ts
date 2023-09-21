function createInput(type: string): HTMLInputElement {
  const input: HTMLInputElement = document.createElement('input');
  input.setAttribute('type', type);
  input.classList.add('smallMargins');
  if (type === 'text') {
    input.id = 'carNameInput';
  } else input.id = 'carColorInput';

  return input;
}

function createButton(type: string): HTMLButtonElement {
  const button: HTMLButtonElement = document.createElement('button');
  button.classList.add('smallMargins');

  if (type === 'create') {
    button.innerText = 'CREATE CAR';
    button.id = 'createCarButton';
  } else {
    button.classList.add('updateBtn');
    button.innerText = 'UPDATE CAR';
    button.disabled = true;
  }

  return button;
}

export default function createCreateBlock(): void {
  const createBlockWrapper: HTMLDivElement = document.createElement('div');
  const carNameInput: HTMLInputElement = createInput('text');
  const nameValue: string | null = localStorage.getItem('nameInput');
  if (nameValue !== null) {
    carNameInput.value = nameValue;
  }

  const carColorInput: HTMLInputElement = createInput('color');
  const colorValue: string | null = localStorage.getItem('colorInput');
  if (colorValue !== null) {
    carColorInput.value = colorValue;
  }

  const createCarButton: HTMLButtonElement = createButton('create');
  const updateCarButton: HTMLButtonElement = createButton('update');

  document.body.appendChild(createBlockWrapper);
  createBlockWrapper.append(carNameInput, carColorInput, createCarButton, updateCarButton);
}

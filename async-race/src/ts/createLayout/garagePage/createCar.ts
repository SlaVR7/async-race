export default class Car {
  constructor() {
    const selectCarButton: HTMLButtonElement = document.createElement('button');
    selectCarButton.classList.add('smallMargins');
    selectCarButton.innerText = 'SELECT';

    const removeCarButton: HTMLButtonElement = document.createElement('button');
    removeCarButton.classList.add('smallMargins');
    removeCarButton.innerText = 'REMOVE';

    const startCarButton: HTMLButtonElement = document.createElement('button');
    startCarButton.classList.add('smallMargins');
    startCarButton.innerText = 'START';

    const stopCarButton: HTMLButtonElement = document.createElement('button');
    stopCarButton.classList.add('smallMargins');
    stopCarButton.innerText = 'STOP';

    const carImage: HTMLImageElement = document.createElement('img');
    carImage.classList.add('car');
    carImage.setAttribute('src', '/src/img/car.svg');

    const border: HTMLDivElement = document.createElement('div');
    border.classList.add('border');

    const carsContainer: HTMLDivElement = document.querySelector('.carsContainer');
    carsContainer.appendChild(selectCarButton);
    carsContainer.appendChild(removeCarButton);
    carsContainer.appendChild(startCarButton);
    carsContainer.appendChild(stopCarButton);
    carsContainer.appendChild(carImage);
    carsContainer.appendChild(border);
  }
}

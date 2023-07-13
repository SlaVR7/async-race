import '../../../img/car.svg';
import '../../../img/pngCar.png';

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

    const carImage: HTMLImageElement = new Image();
    carImage.src = '/src/img/car.svg';
    carImage.classList.add('car');

    const border: HTMLDivElement = document.createElement('div');
    border.classList.add('border');

    const carsContainer: HTMLDivElement | null = document.querySelector('.carsContainer');
    if (carsContainer) {
      carsContainer.appendChild(selectCarButton);
      carsContainer.appendChild(removeCarButton);
      carsContainer.appendChild(startCarButton);
      carsContainer.appendChild(stopCarButton);
      carsContainer.appendChild(carImage);
      carsContainer.appendChild(border);
    }
  }
}

import Car from './createCar';

export default function createGarage(): void {
  const garageWrapper: HTMLDivElement = document.createElement('div');

  const garageTitle: HTMLHeadingElement = document.createElement('h2');
  garageTitle.innerText = 'Garage (777)';

  const pageNumber: HTMLHeadingElement = document.createElement('h3');
  pageNumber.innerText = 'Page #1';

  const carsContainer: HTMLDivElement = document.createElement('div');
  carsContainer.classList.add('carsContainer');

  const prevPageButton: HTMLButtonElement = document.createElement('button');
  prevPageButton.classList.add('smallMargins');
  prevPageButton.innerText = 'PREV BUTTON';

  const nextPageButton: HTMLButtonElement = document.createElement('button');
  prevPageButton.classList.add('smallMargins');
  nextPageButton.innerText = 'NEXT BUTTON';

  document.body.appendChild(garageWrapper);
  garageWrapper.appendChild(garageTitle);
  garageWrapper.appendChild(pageNumber);
  garageWrapper.appendChild(carsContainer);
  garageWrapper.appendChild(prevPageButton);
  garageWrapper.appendChild(nextPageButton);

  const car1 = new Car();
  const car2 = new Car();
  const car3 = new Car();
  const car4 = new Car();
  const car5 = new Car();
  const car6 = new Car();
  const car7 = new Car();
}

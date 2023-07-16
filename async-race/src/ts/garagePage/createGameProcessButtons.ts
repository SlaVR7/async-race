export default function createGameProcessButtons(): void {
  const gameProcessButtonsWrapper: HTMLDivElement = document.createElement('div');

  const raceButton: HTMLButtonElement = document.createElement('button');
  raceButton.classList.add('smallMargins');
  raceButton.innerText = 'RACE';

  const resetButton: HTMLButtonElement = document.createElement('button');
  resetButton.classList.add('smallMargins');
  resetButton.innerText = 'RESET';

  const generateCarsButton: HTMLButtonElement = document.createElement('button');
  generateCarsButton.classList.add('smallMargins');
  generateCarsButton.innerText = 'GENERATE CARS';

  document.body.appendChild(gameProcessButtonsWrapper);
  gameProcessButtonsWrapper.appendChild(raceButton);
  gameProcessButtonsWrapper.appendChild(resetButton);
  gameProcessButtonsWrapper.appendChild(generateCarsButton);
}

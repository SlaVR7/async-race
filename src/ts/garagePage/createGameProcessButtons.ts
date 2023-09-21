export default function createGameProcessButtons(): void {
  const gameProcessButtonsWrapper: HTMLDivElement = document.createElement('div');

  const raceButton: HTMLButtonElement = document.createElement('button');
  raceButton.classList.add('smallMargins');
  raceButton.id = 'startRaceButton';
  raceButton.innerText = 'RACE';

  const resetButton: HTMLButtonElement = document.createElement('button');
  resetButton.classList.add('smallMargins');
  resetButton.id = 'resetRaceButton';
  resetButton.innerText = 'RESET';
  resetButton?.setAttribute('disabled', 'true');

  const generateCarsButton: HTMLButtonElement = document.createElement('button');
  generateCarsButton.classList.add('smallMargins');
  generateCarsButton.id = 'generateCars';
  generateCarsButton.innerText = 'GENERATE CARS';

  document.body.append(gameProcessButtonsWrapper);
  gameProcessButtonsWrapper.append(raceButton, resetButton, generateCarsButton);
}

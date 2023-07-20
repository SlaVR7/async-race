import car from '../svgImages/carImage';
import { getCars, getWinners, getCarName } from '../methods/get';

export default async function createTableItem(currentWinner: number) {
  const cars = await getCars();
  const winners = await getWinners();
  if (winners.length <= currentWinner) return;
  const currentWinnerId = winners[currentWinner].id;
  const currentCarName = await getCarName(currentWinnerId);
  const table = document.querySelector('.table');
  const row = document.createElement('tr');

  const numberCell = document.createElement('td');
  numberCell.innerText = (currentWinner + 1).toString();

  const carCell = document.createElement('td');
  const carImage = document.createElement('div');
  carCell.appendChild(carImage);
  // carImage.classList.add('car');
  const carColored = car.replace('currentColor', `${cars[currentWinner].color}`);
  carImage.innerHTML = carColored.replace('inherit', '50px');

  const nameCell = document.createElement('td');
  nameCell.innerText = currentCarName;

  const winsCell = document.createElement('td');
  winsCell.innerText = winners[currentWinner].wins;

  const timeCell = document.createElement('td');
  timeCell.innerText = winners[currentWinner].time;

  if (table) table.appendChild(row);
  row.appendChild(numberCell);
  row.appendChild(carCell);
  row.appendChild(nameCell);
  row.appendChild(winsCell);
  row.appendChild(timeCell);
}

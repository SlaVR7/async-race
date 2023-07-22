import car from '../svgImages/carImage';
import { getCar } from '../methods/get';

interface Winners {
  id: number,
  wins: number,
  time: number
}

export default async function createTableItem(currentWinner: number, winners: Winners[]) {
  if (winners.length <= currentWinner) return;
  const currentWinnerId = winners[currentWinner].id;
  const currentCar = await getCar(currentWinnerId);
  const currentCarName = currentCar.name;
  const currentCarColor = currentCar.color;
  const table = document.querySelector('.table');
  const row = document.createElement('tr');

  const numberCell = document.createElement('td');
  numberCell.innerText = (currentWinner + 1).toString();

  const carCell = document.createElement('td');
  const carImage = document.createElement('div');
  carCell.append(carImage);

  const carColored = car.replace('currentColor', `${currentCarColor}`);
  carImage.innerHTML = carColored.replace('100px', '51px').replace('50px', '30px');

  const nameCell = document.createElement('td');
  nameCell.innerText = currentCarName;

  const winsCell = document.createElement('td');
  winsCell.innerText = winners[currentWinner].wins.toString();

  const timeCell = document.createElement('td');
  timeCell.innerText = winners[currentWinner].time.toString();

  if (table) table.append(row);
  row.append(numberCell, carCell, nameCell, winsCell, timeCell);
}

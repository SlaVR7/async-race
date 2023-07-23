import car from '../svgImages/carImage';
import { getCar } from '../methods/get';
import {Cars, Winners} from '../interfaces';

export default async function createTableItem(currentWinner: number, winners: Winners[]): Promise<void> {
  if (winners.length <= currentWinner) return;
  const currentWinnerId: number = winners[currentWinner].id;
  const currentCar: Cars = await getCar(currentWinnerId);
  const currentCarName: string = currentCar.name;
  const currentCarColor: string = currentCar.color;
  const table: HTMLTableElement | null = document.querySelector('.table');
  const row: HTMLTableRowElement = document.createElement('tr');

  const numberCell: HTMLTableCellElement = document.createElement('td');
  numberCell.innerText = (currentWinner + 1).toString();

  const carCell: HTMLTableCellElement = document.createElement('td');
  const carImage: HTMLDivElement = document.createElement('div');
  carCell.append(carImage);

  const carColored: string = car.replace('currentColor', `${currentCarColor}`);
  carImage.innerHTML = carColored.replace('100px', '51px').replace('50px', '30px');

  const nameCell: HTMLTableCellElement = document.createElement('td');
  nameCell.innerText = currentCarName;

  const winsCell: HTMLTableCellElement = document.createElement('td');
  winsCell.innerText = winners[currentWinner].wins.toString();

  const timeCell: HTMLTableCellElement = document.createElement('td');
  timeCell.innerText = winners[currentWinner].time.toString();

  if (table) table.append(row);
  row.append(numberCell, carCell, nameCell, winsCell, timeCell);
}

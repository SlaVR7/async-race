import { getWinners } from '../methods/get';
import createTableItem from './createTableItem';
import createCar from "../garagePage/createCar";

export default async function createTable() {
  if (!localStorage.getItem('winnersPage')) localStorage.setItem('winnersPage', '1');
  const currentPage = localStorage.getItem('winnersPage');
  const winners = await getWinners();
  const tableWrapper: HTMLDivElement = document.createElement('div');

  const tableTitle: HTMLHeadingElement = document.createElement('h2');
  tableTitle.innerText = `Winners (${winners.length})`;

  const pageNumber: HTMLHeadingElement = document.createElement('h3');
  pageNumber.innerText = `Page #${currentPage}`;

  const table: HTMLTableElement = document.createElement('table');
  table.classList.add('table');

  const headerRow: HTMLTableRowElement = document.createElement('tr');
  const headers: string[] = ['Number', 'Car', 'Name', 'Wins', 'Best time (second)'];

  headers.forEach((item: string): void => {
    const headerCell: HTMLTableCellElement = document.createElement('th');
    headerCell.textContent = item;
    headerRow.appendChild(headerCell);
  });

  document.body.appendChild(tableWrapper);
  tableWrapper.appendChild(tableTitle);
  tableWrapper.appendChild(pageNumber);
  tableWrapper.appendChild(table);
  table.appendChild(headerRow);

  if (currentPage) {
    const initialWinner: number = 10 * (+currentPage - 1);

    for (let i = initialWinner; i < initialWinner + 10; i += 1) {
      await createTableItem(i);
    }
  }
}

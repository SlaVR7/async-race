import { getWinners } from '../methods/getCars';
import createTableItem from './createTableItem';

export default async function createTable() {
  const winners = await getWinners();
  const tableWrapper: HTMLDivElement = document.createElement('div');

  const tableTitle: HTMLHeadingElement = document.createElement('h2');
  tableTitle.innerText = 'Winners (7)';

  const pageNumber: HTMLHeadingElement = document.createElement('h3');
  pageNumber.innerText = 'Page #1';

  const table: HTMLTableElement = document.createElement('table');
  table.classList.add('table');

  const headerRow: HTMLTableRowElement = document.createElement('tr');
  const headers: string[] = ['Number', 'Car', 'Name', 'Wins', 'Best time (second)'];

  headers.forEach((item: string): void => {
    const headerCell: HTMLTableCellElement = document.createElement('th');
    headerCell.textContent = item;
    headerRow.appendChild(headerCell);
  });

  for (let i = 0; i < winners.length; i += 1) {
    createTableItem(i);
  }

  document.body.appendChild(tableWrapper);
  tableWrapper.appendChild(tableTitle);
  tableWrapper.appendChild(pageNumber);
  tableWrapper.appendChild(table);
  table.appendChild(headerRow);
}
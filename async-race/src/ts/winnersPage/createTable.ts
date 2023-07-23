import { getWinners } from '../methods/get';
import createTableItem from './createTableItem';
import arrow from '../../arrows.svg';
import { Winners } from '../interfaces';

async function sortWinners(winners: Winners[], currentPage: string | null, table: HTMLElement, sortParameter?: string): Promise<void> {
  if (!winners) return;
  let sortedWinners;
  const storageSortMethod: string | null = localStorage.getItem('sortMethod');

  if (sortParameter === 'wins' && storageSortMethod !== 'winsUp') {
    sortedWinners = winners.sort((a: {wins: number}, b: {wins: number}) => a.wins - b.wins);
    localStorage.setItem('sortMethod', 'winsUp');
  } else if (sortParameter === 'wins' && storageSortMethod !== 'winsDown') {
    sortedWinners = winners.sort((a: {wins: number}, b: {wins: number}) => b.wins - a.wins);
    localStorage.setItem('sortMethod', 'winsDown');
  } else if (sortParameter === 'time' && storageSortMethod !== 'timeUp') {
    sortedWinners = winners.sort((a: {time: number}, b: {time: number}) => a.time - b.time);
    localStorage.setItem('sortMethod', 'timeUp');
  } else if (sortParameter === 'time' && storageSortMethod !== 'timeDown') {
    sortedWinners = winners.sort((a: {time: number}, b: {time: number}) => b.time - a.time);
    localStorage.setItem('sortMethod', 'timeDown');
  } else if (!sortParameter) sortedWinners = winners;

  if (currentPage && table && sortedWinners) {
    const initialWinner: number = 10 * (+currentPage - 1);

    for (let i: number = initialWinner; i < initialWinner + 10; i += 1) {
      await createTableItem(i, sortedWinners);
    }
  }

  const tableWins: HTMLTableElement | null = document.querySelector('#wins');
  const tableBestTime: HTMLTableElement | null = document.querySelector('#bestTime');
  tableWins?.addEventListener('click', () => createTable('wins'));
  tableBestTime?.addEventListener('click', () => createTable('time'));
}

function createTableHeaders(): HTMLTableRowElement {
  const headers: string[] = ['Number', 'Car', 'Name', 'Wins', 'Best time (second)'];
  const headerRow: HTMLTableRowElement = document.createElement('tr');
  const arrowImg: HTMLImageElement = new Image();
  arrowImg.src = arrow;
  arrowImg.classList.add('arrow');

  const arrowImg2: Node = arrowImg.cloneNode(true);

  headers.forEach((item: string): void => {
    const headerCell: HTMLTableCellElement = document.createElement('th');
    headerCell.innerText = item;
    if (item === 'Wins') {
      headerCell.append(arrowImg);
      headerCell.id = 'wins';
    }
    if (item === 'Best time (second)') {
      headerCell.id = 'bestTime';
      headerCell.append(arrowImg2);
    }
    headerRow.appendChild(headerCell);
  });
  return headerRow;
}

export default async function createTable(sortParameter?: string): Promise<void> {
  if (!localStorage.getItem('winnersPage')) localStorage.setItem('winnersPage', '1');
  if (document.querySelector('#tableWrapper')) document.querySelector('#tableWrapper')?.remove();

  const currentPage: string | null = localStorage.getItem('winnersPage');
  const mainPagesButtons: HTMLDivElement | null = document.querySelector('#mainPagesButtons');

  const winners: Winners[] = await getWinners();
  const tableWrapper: HTMLDivElement = document.createElement('div');
  tableWrapper.id = 'tableWrapper';

  const tableTitle: HTMLHeadingElement = document.createElement('h2');
  tableTitle.innerText = `Winners (${winners.length})`;

  const pageNumber: HTMLHeadingElement = document.createElement('h3');
  pageNumber.innerText = `Page #${currentPage}`;

  const table: HTMLTableElement = document.createElement('table');
  table.classList.add('table');

  mainPagesButtons?.after(tableWrapper);
  tableWrapper.append(tableTitle, pageNumber, table);
  table.appendChild(createTableHeaders());

  await sortWinners(winners, currentPage, table, sortParameter);
}

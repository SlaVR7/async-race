export default function createWinnersFooter() {
  const prevPageButton: HTMLButtonElement = document.createElement('button');
  prevPageButton.classList.add('smallMargins');
  prevPageButton.id = 'prevWinnersButton';
  prevPageButton.innerText = 'PREV PAGE';

  const nextPageButton: HTMLButtonElement = document.createElement('button');
  nextPageButton.classList.add('smallMargins');
  nextPageButton.id = 'prevWinnersButton';
  nextPageButton.innerText = 'NEXT PAGE';

  document.body.appendChild(prevPageButton);
  document.body.appendChild(nextPageButton);
}
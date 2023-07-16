export default function createGarageFooter() {
  const prevPageButton: HTMLButtonElement = document.createElement('button');
  prevPageButton.classList.add('smallMargins');
  prevPageButton.innerText = 'PREV PAGE';

  const nextPageButton: HTMLButtonElement = document.createElement('button');
  nextPageButton.classList.add('smallMargins');
  nextPageButton.innerText = 'NEXT PAGE';

  document.body.appendChild(prevPageButton);
  document.body.appendChild(nextPageButton);
}

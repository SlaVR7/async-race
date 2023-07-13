export default function createFooter() {
  const prevPageButton: HTMLButtonElement = document.createElement('button');
  prevPageButton.classList.add('smallMargins');
  prevPageButton.innerText = 'PREV BUTTON';

  const nextPageButton: HTMLButtonElement = document.createElement('button');
  prevPageButton.classList.add('smallMargins');
  nextPageButton.innerText = 'NEXT BUTTON';

  document.body.appendChild(prevPageButton);
  document.body.appendChild(nextPageButton);
}

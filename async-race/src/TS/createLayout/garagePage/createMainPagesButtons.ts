export default function createMainPagesButtons(): void {
  const mainPagesButtonsWrapper: HTMLDivElement = document.createElement('div');

  const toGarageBtn: HTMLButtonElement = document.createElement('button');
  toGarageBtn.classList.add('smallMargins');
  toGarageBtn.innerText = 'TO GARAGE';

  const toWinnersBtn: HTMLButtonElement = document.createElement('button');
  toWinnersBtn.classList.add('smallMargins');
  toWinnersBtn.innerText = 'TO WINNERS';

  document.body.appendChild(mainPagesButtonsWrapper);
  mainPagesButtonsWrapper.appendChild(toGarageBtn);
  mainPagesButtonsWrapper.appendChild(toWinnersBtn);
}

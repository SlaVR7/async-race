export default function createMainPagesButtons(): void {
  const mainPagesButtonsWrapper: HTMLDivElement = document.createElement('div');
  mainPagesButtonsWrapper.id = 'mainPagesButtons';

  const toGarageBtn: HTMLButtonElement = document.createElement('button');
  toGarageBtn.classList.add('smallMargins');
  toGarageBtn.id = 'garageBtn';
  toGarageBtn.innerText = 'TO GARAGE';

  const toWinnersBtn: HTMLButtonElement = document.createElement('button');
  toWinnersBtn.classList.add('smallMargins');
  toWinnersBtn.id = 'winnersButton';
  toWinnersBtn.innerText = 'TO WINNERS';

  document.body.appendChild(mainPagesButtonsWrapper);
  mainPagesButtonsWrapper.appendChild(toGarageBtn);
  mainPagesButtonsWrapper.appendChild(toWinnersBtn);
}

import { Car } from '../interfaces';

function resetRace(animId: number, element: HTMLDivElement | null | undefined, winnerMessage: HTMLDivElement | null, isWinnerExist: boolean): void {
  const startRaceButton: HTMLButtonElement | null = document.querySelector('#startRaceButton');
  const startButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.startButton');
  cancelAnimationFrame(animId);
  if (element) element.style.transform = 'translateX(0)';
  if (winnerMessage) winnerMessage.innerText = '';
  isWinnerExist = false;
  startButtons.forEach((startBtn: HTMLButtonElement) => startBtn.removeAttribute('disabled'));
  startRaceButton?.removeAttribute('disabled');
}

export default function startRace(): void {
  const carWrappers: NodeListOf<HTMLDivElement> = document.querySelectorAll('.carWrapper');
  const startButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.startButton');
  const winnerMessage: HTMLDivElement | null = document.querySelector('.winnerMessage');
  const startRaceButton: HTMLButtonElement | null = document.querySelector('#startRaceButton');
  const resetRaceButton: HTMLButtonElement | null = document.querySelector('#resetRaceButton');
  const carWrappersArray: HTMLDivElement[] = Array.from(carWrappers);
  const wrappersId: number[] = carWrappersArray.map((wrapper: HTMLDivElement) => Number(wrapper.getAttribute('carId')));
  startButtons.forEach((startBtn: HTMLButtonElement) => startBtn.setAttribute('disabled', 'true'));
  startRaceButton?.setAttribute('disabled', 'true');
  let isWinnerExist: boolean = false;

  wrappersId.forEach(async (id: number): Promise<void> => {
    const responseStart: Response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=started`, { method: 'PATCH' });
    const { velocity, distance } = await responseStart.json();
    const time: number = distance / velocity;
    const element: HTMLDivElement | null | undefined = document.querySelector(`[carId="${id}"]`)?.querySelector('.car');
    let positionX: number = 0;
    let startTime: number | null = null;
    let animId: number = 0;

    const animate = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const elapsedTime: number = timestamp - startTime;
      positionX = (elapsedTime / time) * (window.innerWidth - 50);
      if (element) element.style.transform = `translateX(${positionX}px)`;
      if (positionX < (window.innerWidth - 125)) {
        animId = requestAnimationFrame(animate);
      } else if (!isWinnerExist) {
        isWinnerExist = true;
        endRace(time, id);
      }
    };
    requestAnimationFrame(animate);

    resetRaceButton?.addEventListener('click', () => resetRace(animId, element, winnerMessage, isWinnerExist));
    const responseDrive: Response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=drive`, { method: 'PATCH' });
    if (responseDrive.status === 500) cancelAnimationFrame(animId);
  });
}

async function endRace(time: number, id: number): Promise<void> {
  const winnerMessage: HTMLDivElement | null = document.querySelector('.winnerMessage');
  const resetRaceButton: HTMLButtonElement | null = document.querySelector('#resetRaceButton');
  const normalCurrentTime: number = +(time / 1000).toFixed(2);
  const name: string | undefined = document.querySelector(`[carId="${id}"]`)?.querySelector('span')?.innerText;

  if (winnerMessage) winnerMessage.innerText = `${name} went first [${(time / 1000).toFixed(2)}s]`;
  resetRaceButton?.removeAttribute('disabled');
  const winResponse: Response = await fetch(`http://127.0.0.1:3000/winners/${id}`);
  const winObj = await winResponse.json();
  let winsNumber = winObj.wins;
  let winsTime = winObj.time;
  if (!winsTime || (winsTime > normalCurrentTime)) winsTime = normalCurrentTime;
  if (!winsNumber) {
    winsNumber = 1;
  } else winsNumber += 1;
  if (winObj.time) {
    const updatedWinner: Car = { wins: winsNumber, time: winsTime };
    await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(updatedWinner),
    });
  } else {
    const winner: Car = { id, wins: winsNumber, time: winsTime };
    await fetch('http://127.0.0.1:3000/winners', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(winner),
    });
  }
}

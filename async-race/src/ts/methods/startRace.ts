import {makeLogger} from "tsconfig-paths-webpack-plugin/lib/logger";

interface Car {
  wins: number,
  time: number,
  id?: number
}

export default function startRace() {
  const carWrappers = document.querySelectorAll('.carWrapper');
  const startButtons = document.querySelectorAll('.startButton');
  const winnerMessage: HTMLDivElement | null = document.querySelector('.winnerMessage');
  const startRaceButton = document.querySelector('#startRaceButton');
  const resetRaceButton = document.querySelector('#resetRaceButton');
  const carWrappersArray = Array.from(carWrappers);
  const wrappersId = carWrappersArray.map((wrapper) => Number(wrapper.getAttribute('carId')));
  startButtons.forEach((startBtn) => startBtn.setAttribute('disabled', 'true'));
  startRaceButton?.setAttribute('disabled', 'true');
  let isWinnerExist = false;

  wrappersId.forEach(async (id) => {
    const responseStart = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=started`, { method: 'PATCH' });
    const { velocity, distance } = await responseStart.json();
    const time = distance / velocity;
    const normalCurrentTime = +(time / 1000).toFixed(2);
    const name: string | undefined = document.querySelector(`[carId="${id}"]`)?.querySelector('span')?.innerText;

    const element: HTMLDivElement | null | undefined = document.querySelector(`[carId="${id}"]`)?.querySelector('.car');
    let positionX = 0;
    let startTime: number | null = null;
    let animId: number = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      positionX = (elapsedTime / time) * (window.innerWidth - 50);
      if (element) element.style.transform = `translateX(${positionX}px)`;
      if (positionX < window.innerWidth - 125) {
        animId = requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);

    resetRaceButton?.addEventListener('click', () => {
      cancelAnimationFrame(animId);
      if (element) element.style.transform = 'translateX(0)';
      if (winnerMessage) winnerMessage.innerText = '';
      isWinnerExist = false;
      startButtons.forEach((startBtn) => startBtn.removeAttribute('disabled'));
      startRaceButton?.removeAttribute('disabled');
    });

    const responseDrive = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=drive`, { method: 'PATCH' });
    if (responseDrive.status === 500) cancelAnimationFrame(animId);
    if (!isWinnerExist && winnerMessage && responseDrive.status !== 500) {
      winnerMessage.innerText = `${name} went first [${(time / 1000).toFixed(2)}s]`;
      resetRaceButton?.removeAttribute('disabled');
      const winResponse = await fetch(`http://127.0.0.1:3000/winners/${id}`);

      const winObj = await winResponse.json();
      console.log('id', id)
      console.log(winObj)
      let winsNumber = winObj.wins;
      let winsTime = winObj.time;
      console.log(winsTime)
      if (!winsTime || (winsTime > normalCurrentTime)) winsTime = normalCurrentTime;
      if (!winsNumber) {
        winsNumber = 1;
      } else winsNumber += 1;
      console.log(winObj)
      if (winObj.time) {
        console.log('существ')
        const updatedWinner: Car = { wins: winsNumber, time: winsTime };
        await fetch(`http://127.0.0.1:3000/winners/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT',
          body: JSON.stringify(updatedWinner),
        });
      } else {
        console.log('не существ')
        const winner: Car = { id, wins: winsNumber, time: winsTime };
        await fetch('http://127.0.0.1:3000/winners', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(winner),
        });
      }
    }
    if (responseDrive.status !== 500) isWinnerExist = true;
  });
}

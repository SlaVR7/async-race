import { getURL } from './get';

export default async function startCar(event: Event): Promise<void> {
  if (event.target instanceof Element) {
    const carWrapper: HTMLElement | null = event.target.parentElement;
    const carWrapperId: string | null | undefined = carWrapper?.getAttribute('carId');
    const stopButton: HTMLButtonElement | null | undefined = carWrapper?.querySelector('.stopButton');
    const startButton: HTMLButtonElement | null | undefined = carWrapper?.querySelector('.startButton');
    stopButton?.removeAttribute('disabled');
    startButton?.setAttribute('disabled', 'true');
    const responseStart: Response = await fetch(`${getURL('engine')}/?id=${carWrapperId}&status=started`, { method: 'PATCH' });
    const { velocity, distance } = await responseStart.json();
    const time: number = distance / velocity;

    const element: HTMLDivElement | null | undefined = carWrapper?.querySelector('.car');
    let startTime: number | null = null;
    let animId: number = 0;
    let positionX: number = 0;

    const animation = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const elapsedTime: number = timestamp - startTime;
      positionX = (elapsedTime / time) * (window.innerWidth - 50);
      if (element) element.style.transform = `translateX(${positionX}px)`;
      if (positionX < window.innerWidth - 125) {
        animId = requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
    if (stopButton) stopButton.addEventListener('click', async () => stopCar(carWrapper, element, animId));

    const responseDrive: Response = await fetch(`${getURL('engine')}/?id=${carWrapperId}&status=drive`, { method: 'PATCH' });
    if (responseDrive.status === 500) cancelAnimationFrame(animId);
  }
}

async function stopCar(carWrapper: HTMLElement | null, element: HTMLDivElement | null | undefined, animId: number): Promise<void> {
  const carWrapperId: string | null | undefined = carWrapper?.getAttribute('carId');
  const stopButton: HTMLButtonElement | null | undefined = carWrapper?.querySelector('.stopButton');
  const startButton: HTMLButtonElement | null | undefined = carWrapper?.querySelector('.startButton');
  cancelAnimationFrame(animId);
  await fetch(`${getURL('engine')}/?id=${carWrapperId}&status=stopped`, { method: 'PATCH' });
  if (element) element.style.transform = 'translateX(0)';
  stopButton?.setAttribute('disabled', 'true');
  startButton?.removeAttribute('disabled');
}

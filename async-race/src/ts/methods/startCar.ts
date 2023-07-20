export default async function startCar(event: Event) {
  if (event.target instanceof Element) {
    const carWrapper = event.target.parentElement;
    const carWrapperId = carWrapper?.getAttribute('carId');
    const stopButton = carWrapper?.querySelector('.stopButton');
    const startButton = carWrapper?.querySelector('.startButton');
    stopButton?.removeAttribute('disabled');
    startButton?.setAttribute('disabled', 'true');
    const responseStart = await fetch(`http://127.0.0.1:3000/engine/?id=${carWrapperId}&status=started`, { method: 'PATCH' });
    const { velocity, distance } = await responseStart.json();
    const time = distance / velocity;

    const element: HTMLDivElement | null | undefined = carWrapper?.querySelector('.car');
    let positionX = 0;
    let startTime: number | null = null;
    let animId: number = 0;

    if (stopButton) {
      stopButton.addEventListener('click', async () => {
        await fetch(`http://127.0.0.1:3000/engine/?id=${carWrapperId}&status=stopped`, { method: 'PATCH' });
        if (element) element.style.transform = 'translateX(0)';
        cancelAnimationFrame(animId);
        stopButton.setAttribute('disabled', 'true');
        startButton?.removeAttribute('disabled');
      });
    }

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

    const responseDrive = await fetch(`http://127.0.0.1:3000/engine/?id=${carWrapperId}&status=drive`, { method: 'PATCH' });
    if (responseDrive.status === 500) cancelAnimationFrame(animId);
  }
}

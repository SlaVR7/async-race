export default function selectCar(event: Event): void {
  const allButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
  const updateBtn: HTMLButtonElement | null = document.querySelector('.updateBtn');

  if (event.target instanceof Element) {
    const carWrapper: HTMLElement | null = event.target.parentElement;
    carWrapper?.classList.toggle('selectAnimate');

    if (updateBtn) updateBtn.disabled = !carWrapper?.classList.contains('selectAnimate');

    allButtons.forEach((btn: HTMLButtonElement): void => {
      if (carWrapper?.classList.contains('selectAnimate') && btn !== event.target && btn !== updateBtn) {
        btn.setAttribute('disabled', 'true');
      } else if (!carWrapper?.classList.contains('selectAnimate') && btn !== event.target && btn !== updateBtn && !btn.classList.contains('stopButton')) {
        btn.removeAttribute('disabled');
      }
    });
  }
}

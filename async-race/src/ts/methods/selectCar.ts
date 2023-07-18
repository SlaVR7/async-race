export default function selectCar(event: Event) {
  const allButtons = document.querySelectorAll('button');
  const updateBtn: HTMLButtonElement | null = document.querySelector('.updateBtn');
  if (event.target instanceof Element) {
    const carWrapper = event.target.parentElement;
    carWrapper?.classList.toggle('selectAnimate');

    if (updateBtn) updateBtn.disabled = !carWrapper?.classList.contains('selectAnimate');

    allButtons.forEach((btn) => {
      if (carWrapper?.classList.contains('selectAnimate') && btn !== event.target && btn !== updateBtn) {
        btn.disabled = true;
      } else if (!carWrapper?.classList.contains('selectAnimate') && btn !== event.target && btn !== updateBtn) {
        btn.disabled = false;
      }
    });
  }
}

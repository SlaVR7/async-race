export async function getCars() {
  const response = await fetch('http://127.0.0.1:3000/garage');
  return response.json();
}

export async function getWinners() {
  const response: Response = await fetch('http://127.0.0.1:3000/winners');
  return response.json();
}

interface Winner {
  id: number;
  name: string;
}

export async function getCarName(currentWinnerId: number) {
  const response: Response = await fetch('http://127.0.0.1:3000/garage/');
  const winners = await response.json();
  const winner = winners.find((item: Winner) => item.id === currentWinnerId);
  return winner.name;
}
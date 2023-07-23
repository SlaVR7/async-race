import { Cars, Winner, Winners } from '../interfaces';

export async function getCars(): Promise<Cars[]> {
  const response: Response = await fetch('http://127.0.0.1:3000/garage');
  return response.json();
}

export async function getWinners(): Promise<Winners[]> {
  const response: Response = await fetch('http://127.0.0.1:3000/winners');
  return response.json();
}

export async function getCar(currentWinnerId: number): Promise<Cars> {
  const response: Response = await fetch('http://127.0.0.1:3000/garage/');
  const winners = await response.json();
  return winners.find((item: Winner): boolean => item.id === currentWinnerId);
}

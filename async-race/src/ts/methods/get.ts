import { Cars, Winner, Winners } from '../interfaces';

export function getURL(type: string): string {
  return `http://127.0.0.1:3000/${type}`;
}

async function getResp(url: string) {
  const response: Response = await fetch(url);
  return response.json();
}

export function getCars(): Promise<Cars[]> {
  return getResp(getURL('garage'));
}

export function getWinners(): Promise<Winners[]> {
  return getResp(getURL('winners'));
}

export async function getCar(currentWinnerId: number): Promise<Cars> {
  const response: Response = await fetch(getURL('garage'));
  const winners = await response.json();
  return winners.find((item: Winner): boolean => item.id === currentWinnerId);
}



export async function getCars() {
  const response = await fetch('http://127.0.0.1:3000/garage');
  return response.json();
}

export async function getWinners() {
  const response: Response = await fetch('http://127.0.0.1:3000/winners');
  return response.json();
}

// export async function getCurrentCar() {
//   const response: Response = await fetch('http://127.0.0.1:3000/garage/:id')
// }

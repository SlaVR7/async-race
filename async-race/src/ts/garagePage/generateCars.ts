import { getCars } from "../methods/get";
import createGaragePage from "./createGarapePage";
import getRandomRGB from "../colors/createRandomRgb";

export default async function generateCars() {
  const currentPage = localStorage.getItem('page');
  const cars = await getCars();
  const carsNumber = cars.length;

  const addCarRequests = [];
  const firstNames = ['Tesla', 'BMW', 'Audi', 'Mitsubishi', 'Renault', 'Lamborghini', 'Mercedes', 'Lada', 'Volvo', 'Fiat'];
  const secondNames = ['Lancer', 'Logan', 'Aventador', 'E200', 'M4', 'A8', 'Priora', 'S40', '123', 'ModelS'];
  const numCarsToAdd = 100;
  const carsPerPage = 7;

  for (let i = 0; i < numCarsToAdd; i += 1) {
    const randomName = `${firstNames[Math.floor(Math.random() * 10)]} ${secondNames[Math.floor(Math.random() * 10)]}`;
    const randomColor = getRandomRGB();

    const addedCar = {
      name: randomName,
      color: randomColor,
    };

    addCarRequests.push(
      fetch('http://127.0.0.1:3000/garage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addedCar),
      }),
    );
  }

  await Promise.all(addCarRequests);

  if (currentPage && (carsNumber + 1) % carsPerPage === 1) {
    localStorage.setItem('page', `${+currentPage + 1}`);
  }

  document.body.innerHTML = '';
  createGaragePage();
}

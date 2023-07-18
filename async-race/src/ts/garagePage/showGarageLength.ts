import { getCars } from '../methods/get';

export default async function showGarageLength() {
  const numberOfCars = await getCars();
  return numberOfCars.length;
}

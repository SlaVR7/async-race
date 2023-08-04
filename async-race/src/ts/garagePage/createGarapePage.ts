import createMainPagesButtons from './createMainPagesButtons';
import createCreateBlock from './createCreateBlock';
import createGameProcessButtons from './createGameProcessButtons';
import createGarage from './createGarage';
import createGarageFooter from './createGarageFooter';
import addButtonsListeners from '../methods/addButtonsListeners';
import { getCars } from '../methods/get';
import { Cars } from '../interfaces';

export default async function createGaragePage(): Promise<void> {
  const cars: Cars[] = await getCars();
  createMainPagesButtons();
  createCreateBlock();
  createGameProcessButtons();
  createGarage(cars).then((): void => {
    createGarageFooter(cars)
      .then(addButtonsListeners);
  });
}

import createMainPagesButtons from './createMainPagesButtons';
import createCreateBlock from './createCreateBlock';
import createGameProcessButtons from './createGameProcessButtons';
import createGarage from './createGarage';
import createGarageFooter from './createGarageFooter';
import addButtonsListeners from '../methods/addButtonsListeners';

export default function createGaragePage(): void {
  createMainPagesButtons();
  createCreateBlock();
  createGameProcessButtons();
  createGarage().then(() => {
    createGarageFooter();
    addButtonsListeners();
  });
}

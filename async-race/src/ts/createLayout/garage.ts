import createMainPagesButtons from './garagePage/createMainPagesButtons';
import createCreateBlock from './garagePage/createCreateBlock';
import createGameProcessButtons from './garagePage/createGameProcessButtons';
import createGarage from './garagePage/createGarage';

export default function createLayout() {
  createMainPagesButtons();
  createCreateBlock();
  createGameProcessButtons();
  createGarage();
}

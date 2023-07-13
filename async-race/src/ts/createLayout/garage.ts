import createMainPagesButtons from './garagePage/createMainPagesButtons';
import createCreateBlock from './garagePage/createCreateBlock';
import createGameProcessButtons from './garagePage/createGameProcessButtons';
import createGarage from './garagePage/createGarage';
import createFooter from './garagePage/createFooter';

export default function createLayout() {
  createMainPagesButtons();
  createCreateBlock();
  createGameProcessButtons();
  createGarage();
  createFooter();
}

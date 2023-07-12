import createMainPagesButtons from './garagePage/createMainPagesButtons';
import createCreateBlock from './garagePage/createCreateBlock';
import createGameProcessButtons from './garagePage/createGameProcessButtons';

export default function createLayout() {
  createMainPagesButtons();
  createCreateBlock();
  createGameProcessButtons();
}

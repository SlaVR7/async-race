import createMainPagesButtons from '../garagePage/createMainPagesButtons';
import addButtonsListeners from '../methods/addButtonsListeners';
import createTable from './createTable';
import createWinnersFooter from './createWinnersFooter';

export default function createWinnersPage(): void {
  createMainPagesButtons();
  createTable().then(() => {
    createWinnersFooter();
    addButtonsListeners();
  });
}

import createMainPagesButtons from '../garagePage/createMainPagesButtons';
import addGarageWinnersBtnListeners from '../garagePage/addGarageWinnersBtnListeners';
import createTable from './createTable';
import createWinnersFooter from './createWinnersFooter';

export default function createWinnersPage(): void {
  createMainPagesButtons();
  createTable().then(() => {
    createWinnersFooter();
    addGarageWinnersBtnListeners();
  });
}

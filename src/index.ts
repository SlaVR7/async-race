import './styles.scss';
import createGaragePage from './ts/garagePage/createGarapePage';
import createWinnersPage from './ts/winnersPage/createWinnersPage';

const pageType: string | null = localStorage.getItem('pageType');
if (pageType === 'winners') {
  createWinnersPage();
} else createGaragePage();

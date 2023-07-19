import './scss/styles.scss';
import createGaragePage from './ts/garagePage/createGarapePage';
import createWinnersPage from './ts/winnersPage/createWinnersPage';

const pageType = localStorage.getItem('pageType');
if (pageType === 'winners') {
  createWinnersPage();
} else createGaragePage();

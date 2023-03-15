import landingPage from '../pages/landingPage';
import logoutButton from '../src/scripts/components/logoutButton';
import domBuilder from '../src/scripts/components/shared/domBuilder';
import navBar from '../src/scripts/components/shared/navBar';

const startApp = (user) => {
  domBuilder();
  navBar();
  landingPage(user);
  logoutButton();
};

export default startApp;

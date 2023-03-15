import landingPage from '../pages/landingPage';
import logoutButton from '../src/scripts/components/logoutButton';
import domBuilder from '../src/scripts/components/shared/domBuilder';
import navBar from '../src/scripts/components/shared/navBar';
import domEvents from '../src/scripts/events/domEvents';
import navigationEvents from '../src/scripts/events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  landingPage(user);
  domEvents();
  navigationEvents(user);
  logoutButton();
};

export default startApp;

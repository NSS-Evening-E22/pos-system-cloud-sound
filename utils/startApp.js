import logoutButton from '../src/scripts/components/logoutButton';
import domBuilder from '../src/scripts/components/shared/domBuilder';
import navBar from '../src/scripts/components/shared/navBar';
import navigationEvents from '../src/scripts/events/navigationEvents';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  navigationEvents();
};

export default startApp;

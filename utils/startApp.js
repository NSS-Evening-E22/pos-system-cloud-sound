import landingPage from '../pages/landingPage';
import logoutButton from '../src/scripts/components/logoutButton';
import domBuilder from '../src/scripts/components/shared/domBuilder';
import navBar from '../src/scripts/components/shared/navBar';
import domEvents from '../src/scripts/events/domEvents';
import { formEvents } from '../src/scripts/events/formEvents';
import landPageEvents from '../src/scripts/events/landPageEvents';
import navigationEvents from '../src/scripts/events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  landingPage(user);
  landPageEvents();
  formEvents();
  domEvents();
  navigationEvents(user);
  logoutButton();
};

export default startApp;

import landingPage from '../pages/landingPage';
import logoutButton from '../src/scripts/components/logoutButton';
// import addItemForm from '../src/scripts/components/shared/addItemForm';
import domBuilder from '../src/scripts/components/shared/domBuilder';
import navBar from '../src/scripts/components/shared/navBar';
import navigationEvents from '../src/scripts/events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  landingPage(user);
  logoutButton();
  navigationEvents();
};

export default startApp;

import logoutButton from '../src/scripts/components/logoutButton';
// import addItemForm from '../src/scripts/components/shared/addItemForm';
import domBuilder from '../src/scripts/components/shared/domBuilder';
import navBar from '../src/scripts/components/shared/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;

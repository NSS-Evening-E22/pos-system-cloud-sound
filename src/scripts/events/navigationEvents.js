import showOrders from '../components/shared/orderCards';
import { getOrders } from '../../api/orderData';
import landingPage from '../../../pages/landingPage';
import domEvents from './domEvents';

const navigationEvents = (user) => {
  // VIEW ALL ORDERS
  document.querySelector('#all-orders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
  // Logo to landing page
  document.querySelector('#title-logo').addEventListener('click', () => {
    landingPage(user);
    domEvents();
  });
};

export default navigationEvents;

import showOrders from '../components/shared/orderCards';
import getOrders from '../../api/orderData';
// eslint-disable-next-line import/no-cycle
import startApp from '../../../utils/startApp';

const navigationEvents = (user) => {
  // VIEW ALL ORDERS
  document.querySelector('#all-orders').addEventListener('click', () => {
    getOrders().then(showOrders);
    console.warn('CLICKED ALL ORDERS');
  });
  // Logo to landing page
  document.querySelector('#title-logo').addEventListener('click', () => {
    startApp(user);
  });
};

export default navigationEvents;

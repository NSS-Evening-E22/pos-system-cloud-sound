import showOrders from '../components/shared/orderCards';
import getOrders from '../../api/orderData';

const navigationEvents = () => {
  // VIEW ALL ORDERS
  document.querySelector('#all-orders').addEventListener('click', () => {
    getOrders().then(showOrders);
    console.warn('CLICKED ALL ORDERS');
  });
};

export default navigationEvents;

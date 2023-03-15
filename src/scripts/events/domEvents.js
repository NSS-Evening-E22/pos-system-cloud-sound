import getOrders from '../../api/orderData';
import showOrders from '../components/shared/orderCards';

const domEvents = () => {
  // VIEW ALL ORDERS
  document.querySelector('#view-order').addEventListener('click', () => {
    getOrders().then(showOrders);
    console.warn('CLICKED in the DOM');
  });
};

export default domEvents;

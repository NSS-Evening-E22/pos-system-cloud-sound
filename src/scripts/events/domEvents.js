import { getOrders } from '../../api/orderData';
import showOrders from '../components/shared/orderCards';

const domEvents = () => {
  document.querySelector('#view-order').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
};

export default domEvents;

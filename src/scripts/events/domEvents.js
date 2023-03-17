import createOrderPage from '../../../pages/createOrder';
import showOrders from '../components/shared/orderCards';
import { getOrders } from '../../api/orderData';

const domEvents = () => {
  document.querySelector('#view-order').addEventListener('click', () => {
    getOrders().then(showOrders);
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    createOrderPage();
  });
};

export default domEvents;

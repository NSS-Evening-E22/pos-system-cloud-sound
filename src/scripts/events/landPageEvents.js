import createOrderPage from '../../../pages/createOrder';
import viewRevenue from '../../../pages/revenue';
import { getOrders } from '../../api/orderData';
import showOrders from '../components/shared/orderCards';

const landPageEvents = () => {
  document.querySelector('#view-order').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
  // Landing page create an order
  document.querySelector('#create-order-landing').addEventListener('click', () => {
    createOrderPage();
  });
  // Landing page view revenue
  document.querySelector('#view-rev').addEventListener('click', () => {
    viewRevenue();
  });
};

export default landPageEvents;

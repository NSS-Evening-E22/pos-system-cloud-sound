import createOrderPage from '../../../pages/createOrder';
import { getOrderDetails } from '../../api/itemData';
import { deleteOrder, getOrders, getSingleOrder } from '../../api/orderData';
import showOrders from '../components/shared/orderCards';
import showDetails from '../components/shared/orderDetailsCard';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR VIEWING DETAILS
    if (e.target.id.includes('view-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(showDetails);
    }
    // DELETE ORDER
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }
    // EDIT ORDER
    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => createOrderPage(orderObj));
    }
  });
};

export default domEvents;

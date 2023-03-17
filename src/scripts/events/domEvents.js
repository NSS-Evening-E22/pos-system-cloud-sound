import getOrderDetails from '../../api/itemData';
import { deleteOrder, getOrders } from '../../api/orderData';
import showOrders from '../components/shared/orderCards';
import showDetails from '../components/shared/orderDetailsCard';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR VIEWING DETAILS
    if (e.target.id.includes('#view-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(showDetails);
    }
    // DELETE WORD
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
  });
};

export default domEvents;

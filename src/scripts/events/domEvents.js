import createOrderPage from '../../../pages/createOrder';
import paymentForm from '../../../pages/payment';
import { deleteAnItem, getOrderDetails } from '../../api/itemData';
import addItemForm from '../components/shared/addItemForm';
import { deleteOrder, getOrders, getSingleOrder } from '../../api/orderData';
import showOrders from '../components/shared/orderCards';
import showDetails from '../components/shared/orderDetailsCard';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event for viewing details
    if (e.target.id.includes('view-details-btn')) {
      const [, orderId] = e.target.id.split('--');
      getOrderDetails(orderId).then((obj) => showDetails(obj, orderId));
    }
    // click event for showing add item form
    if (e.target.id.includes('add-item')) {
      addItemForm();
    }
    // DELETE ORDER
    if (e.target.id.includes('delete-order-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
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

    if (e.target.id.includes('go-to-payment')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => paymentForm(orderObj));
    }

    if (e.target.id.includes('delete-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const [, orderId] = e.target.id.split('----');
      deleteAnItem(firebaseKey).then((obj) => showDetails(obj));
      getOrderDetails(orderId).then((obj) => showDetails(obj));
    }
  });
};

export default domEvents;

import createOrderPage from '../../../pages/createOrder';
import paymentForm from '../../../pages/payment';
import { deleteAnItem, getOrderDetails, getSingleItem } from '../../api/itemData';
import addItemsForm from '../components/shared/addItemForm';
import { getOrders, getSingleOrder } from '../../api/orderData';
import showOrders from '../components/shared/orderCards';
import showDetails from '../components/shared/orderDetailsCard';
import deleteOrderItems from '../../api/mergedData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event for viewing details
    if (e.target.id.includes('view-details-btn')) {
      const [, orderId] = e.target.id.split('--');
      getOrderDetails(orderId).then((obj) => showDetails(obj, orderId));
    }
    // click event for showing add item form
    if (e.target.id.includes('add-items')) {
      const [, orderId] = e.target.id.split('--');
      getSingleOrder(orderId).then((orderObj) => addItemsForm(orderObj.firebaseKey, orderId));
    }
    // DELETE ORDER
    if (e.target.id.includes('delete-order-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrderItems(firebaseKey).then(() => {
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

    if (e.target.id.includes('edit-items-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((item) => {
        addItemsForm(item, item.order_id);
      });
    }

    if (e.target.id.includes('delete-item-btn')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        const [, orderId] = e.target.id.split('----');
        deleteAnItem(firebaseKey).then(() => {
          getOrderDetails(orderId).then((obj) => showDetails(obj, orderId));
        });
      }
    }
  });
};

export default domEvents;

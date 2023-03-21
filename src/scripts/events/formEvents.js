import {
  createItem, getOrderDetails, updateItem
} from '../../api/itemData';
import { createOrders, getOrders, updateOrders } from '../../api/orderData';
import showOrders from '../components/shared/orderCards';
import showDetails from '../components/shared/orderDetailsCard';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // CREATE ORDER

    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#ordername').value,
        phone: document.querySelector('#custphone').value,
        email: document.querySelector('#custemail').value,
        type: document.querySelector('#custtype').value,
        status: 'open',
        time_stamp: new Date().toLocaleString(),
      };
      console.warn('btn is clicked ', payload);
      createOrders(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrders(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    // EDIT ORDER

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#ordername').value,
        phone: document.querySelector('#custphone').value,
        email: document.querySelector('#custemail').value,
        type: document.querySelector('#custtype').value,
        firebaseKey,
      };

      updateOrders(payload).then(() => {
        getOrders().then(showOrders);
      });
    }

    // ADD ITEM

    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payLoad = {
        item_name: document.querySelector('#add-item').value,
        price: Number(document.querySelector('#item-price').value),
        order_id: document.querySelector('#firebaseKey').value,
      };
      createItem(payLoad).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload);
      }).then(() => {
        getOrderDetails(firebaseKey).then((obj) => {
          showDetails(obj, firebaseKey);
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        item_name: document.querySelector('#add-item').value,
        price: Number(document.querySelector('#item-price').value),
        firebaseKey,
      };
      updateItem(payload)
        .then(() => {
          const orderId = document.querySelector('#firebaseKey').value;
          getOrderDetails(orderId).then((items) => {
            showDetails(items, orderId);
          });
        });
    }

    if (e.target.id.includes('close-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payLoad = {
        type: document.querySelector('#payment').value,
        tip_amount: Number(document.querySelector('#tips').value),
        status: 'closed',
        firebaseKey,
      };
      updateOrders(payLoad).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};

export default formEvents;

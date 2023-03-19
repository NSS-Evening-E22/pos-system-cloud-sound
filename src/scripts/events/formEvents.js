import { editItem } from '../../api/itemData';
import addItem from '../components/shared/addItemForm';
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
        order_total: 0,
        tip_amount: 0,
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

    if (e.target.id.includes('add-item')) {
      const payLoad = {
        item_name: document.querySelector('#item_name').value,
        price: document.querySelector('#price'),
      };
      addItem(payLoad).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        editItem(patchPayload).then(() => {
          addItem().then(showDetails);
        });
      });
    }

    // EDIT ITEM

    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payLoad = {
        item_name: document.querySelector('#item_name').value,
        price: document.querySelector('#price').value,
        firebaseKey,
      };
      editItem(payLoad).then(() => {
        addItem().then(showDetails);
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

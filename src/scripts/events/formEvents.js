import { createOrders, getOrders, updateOrders } from '../../api/orderData';
import showOrders from '../components/shared/orderCards';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#ordername').value,
        phone: document.querySelector('#custphone').value,
        email: document.querySelector('#custemail').value,
        type: document.querySelector('#custtype').value,
      };
      console.warn('btn is clicked ', payload);
      createOrders(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrders(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }
  });
};

export default formEvents;

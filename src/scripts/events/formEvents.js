import { editItem } from '../../api/itemData';
import addItem from '../components/shared/addItemForm';
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
        type: document.querySelector('#custtype').value
      };

      createOrders(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrders(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }
  });
  
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
    };
    
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
};

export default formEvents;

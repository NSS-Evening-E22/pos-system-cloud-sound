import { editItem } from '../../api/itemData';
import addItem from '../components/shared/addItemForm';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
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
  });
};

export default formEvents;

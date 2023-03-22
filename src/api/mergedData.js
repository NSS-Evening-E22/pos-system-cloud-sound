import { deleteAnItem, getOrderDetails } from './itemData';
import { deleteOrder } from './orderData';

const deleteOrderItems = (taco) => new Promise((resolve, reject) => {
  getOrderDetails(taco).then((allOrderItems) => {
    const deleteItemPromises = allOrderItems.map((item) => deleteAnItem(item.firebaseKey));
    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(taco).then(resolve);
    });
  }).catch(reject);
});

export default deleteOrderItems;

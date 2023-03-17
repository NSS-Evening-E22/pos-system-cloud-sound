import getOrderDetails from '../../api/itemData';
import showDetails from '../components/shared/orderDetailsCard';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR VIEWING DETAILS
    if (e.target.id.includes('#view-details-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderDetails(firebaseKey).then(showDetails);
    }
  });
};

export default domEvents;

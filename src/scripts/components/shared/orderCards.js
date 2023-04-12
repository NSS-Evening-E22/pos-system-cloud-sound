import clearDom from '../../../../utils/clearDom';
import renderToDom from '../../../../utils/renderToDom';

const showOrders = (array) => {
  clearDom();
  let domString = '<div style = "width:200rem"><h1 id="welcome-title">Open Orders</h1></div>';
  array.forEach((item) => {
    if (item.status === 'open') {
      domString += `
      <div id= "order-card" class="card">
        <div class="card-body">
          <h5 class="card-title"><b>Name:</b> ${item.name}</h5>
            <p class="card-text bold"><b>Email:</b> ${item.email}</p>
            <p class="card-text bold"><b>Phone Number:</b> ${item.phone}</p>
            <p class="card-text bold"><b>Order Status:</b> ${item.status}</p>
            <p class="card-text bold"><b>Order Type:</b> ${item.type}</p>
            <hr>
            <i id="view-details-btn--${item.firebaseKey}" class=" btn btn-success">View</i>
            <i id="edit-order-btn--${item.firebaseKey}" class=" btn btn-info">Edit</i>
            <i id="delete-order-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
        </div>
      </div>`;
      renderToDom('#store', domString);
    }
  });
  let domsCard = '<div style = "width:200rem"><h1 id="welcome-title">Closed Orders</h1></div>';
  array.forEach((closedItem) => {
    if (closedItem.status === 'closed') {
      domsCard += `
      <div id= "order-card" class="card">
        <div class="card-body">
          <h5 class="card-title"><b>Name:</b> ${closedItem.name}</h5>
            <p class="card-text bold"><b>Email:</b> ${closedItem.email}</p>
            <p class="card-text bold"><b>Phone Number:</b> ${closedItem.phone}</p>
            <p class="card-text bold"><b>Order Status:</b> ${closedItem.status}</p>
            <p class="card-text bold"><b>Order Type:</b> ${closedItem.type}</p>
            <hr>
            <i id="view-details-btn--${closedItem.firebaseKey}" class=" btn btn-success">View</i>
            <i id="edit-order-btn--${closedItem.firebaseKey}" class=" btn btn-info">Edit</i>
            <i id="delete-order-btn--${closedItem.firebaseKey}" class="btn btn-danger">Delete</i>
        </div>
      </div>`;
      renderToDom('#view', domsCard);
    }
  });
};

export default showOrders;

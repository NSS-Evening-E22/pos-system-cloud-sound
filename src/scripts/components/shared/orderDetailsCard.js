import clearDom from '../../../../utils/clearDom';
import renderToDOM from '../../../../utils/renderToDom';

const showDetails = (array, orderId) => {
  console.warn('my array is', orderId);
  clearDom();
  let domString = `<div>
  <div id="text-style">
  <button type="button" class="btn btn-success btn-lg btn-3" id="add-item--${orderId}" style="width: 200px">Add item</button>
  <br>
  <br>
  <button type="button" class="btn btn-success btn-lg btn-3" id="go-to-payment--${orderId}" style="width: 200px">Go To Payment</button>
  </div>
  </div>`;
  array.forEach((item) => {
    domString += `
      <div id="details-card" class="card">
        <div class="card-body">
          <h5 class="card-title">${item.item_name}</h5>
            <p class="card-text bold">${item.price}</p>
            <hr>
            <i id="edit-item-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
            <i id="delete-item-btn--${item.firebaseKey}----${item.order_id}" class="btn btn-danger">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default showDetails;

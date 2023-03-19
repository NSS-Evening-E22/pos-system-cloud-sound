import clearDom from '../../../../utils/clearDom';
import renderToDOM from '../../../../utils/renderToDom';

const showDetails = (array, orderId) => {
  console.warn('my array is', orderId);
  clearDom();
  let domString = `
  <div id="text-style" class="items-add-btn" >
  <button type="button" class="btn btn-success btn-lg btn-3" id="add-item--${orderId}" style="width: 20rem">Add item</button>
  <br>
  <br>
  <button type="button" class="btn btn-success btn-lg btn-3" id="go-to-payment--${orderId}" style="width: 20rem">Go To Payment</button>
  <br>
  <br>
  </div>`;
  array.forEach((item) => {
    domString += `
      <div id="details-card">
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

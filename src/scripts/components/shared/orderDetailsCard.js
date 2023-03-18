import clearDom from '../../../../utils/clearDom';
import renderToDOM from '../../../../utils/renderToDom';

const showDetails = (array) => {
  clearDom();

  let domString = `<div>
  <div id="text-style">
  <button type="button" class="btn btn-success btn-lg btn-3" id="add-item" style="width: 200px">Add item</button>
  <br>
  <br>
  <button type="button" class="btn btn-success btn-lg btn-3" id="go-to-payment" style="width: 200px">Go To Payment</button>
  </div>
  </div>`;
  array.forEach((item) => {
    domString += `
      <div id="details-card" class="card">
        <div class="card-body">
          <h5 class="card-title">${item.item_name}</h5>
            <p class="card-text bold">${item.price}</p>
            <hr>
            <i id="edit-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export default showDetails;

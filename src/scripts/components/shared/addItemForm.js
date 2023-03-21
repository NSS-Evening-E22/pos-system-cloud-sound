import clearDom from '../../../../utils/clearDom';
import renderToDOM from '../../../../utils/renderToDom';

const addItemsForm = (obj = {}, orderId) => {
  console.warn('my order is', orderId);
  clearDom();
  const domString = `
<form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : `submit-item--${orderId}`}">
<div class="mb-3">
  <label for="item" class="form-label">Add Item</label>
  <input type="text" class="form-control" id="add-item" value="${obj.item_name || ''}" required>
</div>
<div class="mb-3">
  <label for="price" class="form-label">Item Price</label>
  <input type="text" class="form-control" id="item-price" value="${obj.price || ''}" required>
  <input type="hidden" id="firebaseKey" value="${orderId}" >
</div>
<button type="submit" class="btn btn-primary"> Add/Edit Item </button>
</form>`;

  renderToDOM('#store', domString);
};

export default addItemsForm;

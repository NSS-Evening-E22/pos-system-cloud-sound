import clearDom from '../../../../utils/clearDom';
import renderToDOM from '../../../../utils/renderToDom';

const addItem = (obj) => {
  clearDom();
  const domString = `
<form id="${obj.firebaseKey ? `edit-item--${obj.firebaseKey}` : 'submit-card'}"
<div class="mb-3">
  <label for="item" class="form-label">Add Item</label>
  <input type="text" class="form-control" id="add-item" value="${obj.item_name || ''}" required>
</div>
<div class="mb-3">
  <label for="price" class="form-label">Item Price</label>
  <input type="text" class="form-control" id="item-price" value="${obj.price || ''} required>
</div>
</form>
<button type="submit" class="btn btn-success" id="${obj.firebaseKey ? `edit-item--${obj.firebaseKey}` : 'add-item'}">Add/Edit Item</button>`;

  renderToDOM('#form-container', domString);
};

export default addItem;

import clearDom from '../../../../utils/clearDom';
import renderToDOM from '../../../../utils/renderToDom';

const addItemForm = () => {
  clearDom();
  const domString = `
<div class="mb-3">
  <label for="item" class="form-label">Add Item</label>
  <input type="text" class="form-control" id="add-item">
</div>
<div class="mb-3">
  <label for="price" class="form-label">Item Price</label>
  <input type="text" class="form-control" id="item-price">
</div>
<button type="submit" class="btn btn-success">Add/Edit Item</button>`;

  renderToDOM('#form-container', domString);
};

export default addItemForm;

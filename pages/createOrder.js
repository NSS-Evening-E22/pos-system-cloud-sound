import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const createOrderPage = (obj = {}) => {
  clearDom();
  let domString = '';
  domString += `  
  <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label" Order Name</label>
      <input type="text" class="form-control" id="ordername" aria-describedby="emailHelp" value="${obj.name || ''}" required>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Customer Phone</label>
      <input type="text" class="form-control" id="custphone" value="${obj.phone || ''}" required>
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Customer Email</label>
    <input type="text" class="form-control" id="custemail" value="${obj.email || ''}" required>
  </div>
  <label for="order-type">Order Type</label>
  <select class="form-control" placeholder="Select Order Type" id="custtype" name="orderType" value="${obj.type || ''}" required>
  <option value="">Select Order Type</option>
    <option value="in-person" ${obj.type === 'in-person' ? 'selected' : ''}>In-Person</option>
    <option value="phone" ${obj.type === 'phone' ? 'selected' : ''}>Phone</option>
  </select>
</div>
<br>
    <button type="submit" class="btn btn-primary" id="submit-order">Submit</button>
  </form>`;
  renderToDOM('#store', domString);
};

export default createOrderPage;

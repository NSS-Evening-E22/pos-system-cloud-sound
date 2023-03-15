import renderToDOM from '../utils/renderToDom';

const createOrderPage = () => {
  let domString = '';
  domString += `  
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Order Name</label>
      <input type="text" class="form-control" id="ordername" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Customer Phone</label>
      <input type="text" class="form-control" id="custphone">
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Customer Email</label>
    <input type="text" class="form-control" id="custemail">
  </div>
  <div class="dropdown-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Order Type
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">In-Person</a></li>
    <li><a class="dropdown-item" href="#">Phone</a></li>
  </ul>
</div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  renderToDOM('#main-container', domString);
};

export default createOrderPage;

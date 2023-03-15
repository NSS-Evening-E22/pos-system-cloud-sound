import renderToDOM from '../utils/renderToDom';

const landingPage = (user) => {
  document.querySelector('#store').innerHTML = '';
  const domString = `
        <div>
        <div id="text-style">
        <h1 id="text-styles"> Welcome ${user.displayName}</h1>
        <button type="button" class="btn btn-success btn-lg" id="view-order" style="width: 200px">View Orders</button>
        <br>
        <br>
        <button type="button" class="btn btn-success btn-lg" id="create-order" style="width: 200px">Create an Order</button>
        <br>
        <br>
        <button type="button" class="btn btn-success btn-lg" id="view-rev" style="width: 200px">View Revenue</button>
        </div>
        </div>
        `;
  renderToDOM('#store', domString);
};

export default landingPage;

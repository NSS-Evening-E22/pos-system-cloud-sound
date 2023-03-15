import renderToDOM from '../utils/renderToDom';

const landingPage = (user) => {
  document.querySelector('#store').innerHTML = '';
  const domString = `
        <div>
        <div id="text-style">
        <h1 class="word" data-animation="slide" id="welcome-title"> Welcome ${user.displayName}</h1>
        <br>
        <button type="button" class="btn btn-success btn-lg btn-3" id="view-order" style="width: 200px">View Orders</button>
        <br>
        <br>
        <button type="button" class="btn btn-success btn-lg btn-3" id="create-order" style="width: 200px">Create an Order</button>
        <br>
        <br>
        <button type="button" class="btn btn-success btn-lg btn-3" id="view-rev" style="width: 200px">View Revenue</button>
        </div>
        </div>
        `;
  renderToDOM('#store', domString);
};

export default landingPage;

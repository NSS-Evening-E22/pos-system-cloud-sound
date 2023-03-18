import renderToDOM from '../../../../utils/renderToDom';
import storeLogo from '../../../../instructions/hhpw-record.png';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <img src=${storeLogo} alt="store Logo" id="title-logo" style= "height:80px">
        <br>
        <a class="navbar-brand title" id="title-logo" href="#">Hip-Hop Pizza and Wangs</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
          <a class="nav-link" href="#" id="all-orders">
            View Orders <span class="sr-only">(current)</span>
          </a>
        </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" id="create-order">
                Create Order <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
            <a class="nav-link" href="#" id="view-revenue">
              View Revenue <span class="sr-only">(current)</span>
            </a>
          </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
            <div id="login-form-container"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;

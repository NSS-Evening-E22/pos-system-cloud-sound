import loginButton from '../src/scripts/components/loginButton';
import renderToDOM from '../utils/renderToDom';
import logo from '../instructions/hhpw-record.png';

const welcomePage = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
      <div>
      <div id="text-style">
      <h1 id="welcome-title"> Welcome to Hip-Hop Pizza and Wangs</h1>
      <img src=${logo} alt="store logo">
      <div id="login-button"><div>
      </div>
      <br>
      </div>
  
      `;
  renderToDOM('#app', domString);
  loginButton();
};

export default welcomePage;

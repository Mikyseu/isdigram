import Component from "../components/core/Component.mjs";
import Button from "../components/core/Button.mjs";

class Landing extends Component {
  constructor() {
    super("main");

    const title = new Component("h1");
    title.setText("Landing");

    const loginButton = new Button();
    loginButton.setText("Login");
    loginButton.addClass("Login");

    loginButton.onClick((event) => {
      event.preventDefault();
      this._onLoginClickCallback();
    });

    const registerButton = new Button();
    registerButton.setText("Register");
    loginButton.addClass("Register");

    registerButton.onClick((event) => {
      event.preventDefault();
      this._onRegisterClickCallback();
    });

    this.add(title, loginButton, registerButton);

    this._onLoginClickCallback = null;
    this._onRegisterClickCallback = null;
  }

  onLoginClick(callback) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");

    this._onLoginClickCallback = callback;
  }

  onRegisterClick(callback) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");

    this._onRegisterClickCallback = callback;
  }
}

export default Landing;

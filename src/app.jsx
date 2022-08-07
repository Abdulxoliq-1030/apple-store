import React, { Component } from "react";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Checkout from "./pages/checkout/checkout";
import View from "./pages/view/view";
import products from "./products";
import "./assets/styles/base.scss";

const USER_KEY = "user";
const PAGE_KEY = "page";
const REDIRECT_PAGE = "login";
class App extends Component {
  userName = React.createRef();
  userStreetName = React.createRef();
  userCity = React.createRef();
  userState = React.createRef();
  userCountry = React.createRef();

  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem(USER_KEY)); // get user
    const page = JSON.parse(localStorage.getItem(PAGE_KEY)); // get page
    this.state = {
      page: user ? page : REDIRECT_PAGE,
      user,
      products: products,
    };
  }

  handleLogin = () => {
    const data = {
      userName: this.userName.current.value,
      userStreetName: this.userStreetName.current.value,
      userCity: this.userCity.current.value,
      userState: this.userState.current.value,
      userCountry: this.userCountry.current.value,
    };
    localStorage.setItem(USER_KEY, JSON.stringify(data));
    localStorage.setItem(PAGE_KEY, JSON.stringify("dashboard"));
    this.setState({ user: true, page: "dashboard" });
  };

  render() {
    switch (this.state.page) {
      case "login":
        return (
          <Login
            onLogin={this.handleLogin}
            userName={this.userName}
            userStreetName={this.userStreetName}
            userCity={this.userCity}
            userState={this.userState}
            userCountry={this.userCountry}
          />
        );
      case "dashboard":
        return <Dashboard products={products} />;
      case "checkout":
        return <Checkout />;
      case "view":
        return <View />;
      default:
        return (
          <Login
            onLogin={this.handleLogin}
            userName={this.userName}
            userStreetName={this.userStreetName}
            userCity={this.userCity}
            userState={this.userState}
            userCountry={this.userCountry}
          />
        );
    }
  }
}
export default App;

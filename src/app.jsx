import React, { Component } from "react";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Checkout from "./pages/checkout/checkout";
import View from "./pages/view/view";
import CheckUser from "./pages/checkout/components/check-user/check-user";
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
      userData: {},
      products: products,
      productName: "",
      bagItems: [],
    };
  }

  addBagItem = (product) => {
    let bagItems = this.state.bagItems;
    let temp = this.state.products.filter((item) => item === product);
    bagItems.push(temp[0]);

    this.setState({ bagItems: bagItems });
  };

  handleInputChange = async (event) => {
    await this.setState({ productName: event.target.value });
    this.filterProducts();
  };
  filterProducts = () => {
    let temp =
      this.state.productName !== ""
        ? products.filter(
            (product) =>
              product.name
                .toLowerCase()
                .includes(this.state.productName.toLowerCase()) ||
              product.model
                .toLowerCase()
                .includes(this.state.productName.toLowerCase())
          )
        : products;
    this.setState({ products: temp });
  };


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
    this.setState({ user: true, page: "dashboard",userData });
  };

  handleLogOut = () => {
    localStorage.removeItem(USER_KEY);
    this.setState({ user: null, page: REDIRECT_PAGE });
  };

  handlePageChange = (newPage) => {
    localStorage.setItem(PAGE_KEY, JSON.stringify(newPage));
    this.setState({ page: newPage });
  };

  getPage = () => {
    const { products, user } = this.state;
    const defaultProps = {
      onInputChange: this.handleInputChange,
      addBagItem: this.addBagItem,
      onPageChange: this.handlePageChange,
      onLogOut: this.handleLogOut,
      onProduct: this.handleProduct,
      bagItems: this.state.bagItems,
    };
    console.log(this.state.bagItems);
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
        return <Dashboard {...defaultProps} products={products} />;
      case "check-user":
        return <CheckUser userData={user} {...defaultProps} />;
      case "checkout":
        return <Checkout {...defaultProps} />;
      case "view":
        return <View {...defaultProps} />;
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
  };

  render() {
    return <>{this.getPage()}</>;
  }
}

export default App;

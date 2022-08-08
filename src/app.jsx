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
      inputLabel: "Login",
      products: products,
      productName: "",
      bagItems: [],
      totalPrice: 0,
      //yanfi state qushildi
      viewProduct: products[0],
    };
  }

  addViewProduct = (product) => {
    this.setState({ viewProduct: product });
  };

  removeBagItem = (product) => {
    let tempPrice = this.state.totalPrice;
    tempPrice = +tempPrice - +product.price;
    let bagItems = this.state.bagItems.filter((item) => item !== product);
    this.setState({ bagItems: bagItems, totalPrice: tempPrice });
  };

  addBagItem = (product) => {
    const { bagItems, totalPrice, products } = this.state;
    let isOk = bagItems.some((item) => item === product);
    let tempPrice = totalPrice;
    let temp = products.filter((item) => item === product)[0];
    if (!isOk) {
      bagItems.push(temp);
      this.setState({
        bagItems: bagItems,
        totalPrice: (tempPrice += +product.price),
      });
    }
  };

  handleInputChange = async (event) => {
    await this.setState({ productName: event.target.value });
    this.filterProducts();
  };
  filterProducts = () => {
    const { productName } = this.state;
    let temp = products.filter(
      (product) =>
        product.name.toLowerCase().includes(productName.toLowerCase()) ||
        product.model.toLowerCase().includes(productName.toLowerCase())
    );
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
    this.setState({ user: data, page: "dashboard" });
  };

  handleInputLabel = (label) => {
    this.setState({ inputLabel: label });
  };

  handleLogOut = () => {
    localStorage.removeItem(USER_KEY);
    this.setState({ user: null, page: REDIRECT_PAGE });
  };

  handlePageChange = (newPage, product) => {
    localStorage.setItem(PAGE_KEY, JSON.stringify(newPage));
    this.setState({ page: newPage, viewProduct: product });
  };

  getPage = () => {
    const {
      products,
      user,
      bagItems,
      totalPrice,
      viewProduct,
      addViewProduct,
    } = this.state;

    const defaultProps = {
      addViewProduct: addViewProduct,
      onInputChange: this.handleInputChange,
      addBagItem: this.addBagItem,
      onPageChange: this.handlePageChange,
      onLogOut: this.handleLogOut,
      onProduct: this.handleProduct,
      bagItems: bagItems,
      totalPrice: totalPrice,
      viewProduct: viewProduct,
      removeBagItem: this.removeBagItem, //003,
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
            inputLabel={this.state.inputLabel}
          />
        );
      case "dashboard":
        return <Dashboard {...defaultProps} products={products} />;
      case "check-user":
        return (
          <CheckUser
            userData={user}
            {...defaultProps}
            onInputLabel={this.handleInputLabel}
          />
        );
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
            inputLabel={this.state.inputLabel}
          />
        );
    }
  };

  render() {
    return <>{this.getPage()}</>;
  }
}

export default App;

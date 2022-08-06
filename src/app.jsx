import React, { Component } from "react";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Checkout from "./pages/checkout/checkout";
import View from "./pages/view/view";
import "./assets/styles/base.scss";
import products from "./products";

const REDIRECT_PAGE = "login";
const PAGE_KEY = "page";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "login",
      products: products,
    };
  }

  handleLogin = () => {
    this.state.user.map((data) => {
      if (data) {
        this.setState({ page: "dashboard" });
      }
    });
  };

  getPage = () => {
    const { products } = this.state;
    const defaultProps = {
      onPageChange: this.handlePageChange,
      onLogOut: this.handleLogOut,
    };

    switch (this.state.page) {
      case "login":
        return <Login onLogin={this.handleLogin} />;
      case "dashboard":
        return <Dashboard {...defaultProps} products={products} />;
      case "bag-items":
        return <Checkout {...defaultProps} />;
      case "view":
        return <View {...defaultProps} />;
      default:
        return <Login onLogin={this.handleLogIn} />;
    }
  };

  render() {
    console.log(this.state.page);
    return <div className="wrapper">{this.getPage()}</div>;
  }
}
export default App;

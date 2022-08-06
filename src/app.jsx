import React, { Component } from "react";
// import Login from "./pages/login/login";
import "./assets/styles/base.scss";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import products from "./products";
import Checkout from "./pages/checkout/checkout";
import View from "./pages/view/view";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      products: products,
      page: "dashboard",
    };
  }

  handleSubmit = () => {};

  handlePageChange = (page) => {
    // let temp = this.state.page;
    // temp = page;
    this.setState({ page: page });
  };

  render() {
    switch (this.state.page) {
      case "login":
        return <Login onLogin={this.handleLogIn} />;
      case "dashboard":
        return (
          <Dashboard onPageChange={this.handlePageChange} products={products} />
        );
      case "checkout":
        return <Checkout onPageChange={this.handlePageChange} />;
      case "view":
        return <View />;
      default:
        return <Login onLogin={this.handleLogIn} />;
    }
  }
}
export default App;

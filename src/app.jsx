import React, { Component } from "react";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Checkout from "./pages/checkout/checkout";
import products from "./products";
import View from "./pages/view/view";
import "./assets/styles/base.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products,
    };
  }

  handlePage = (page) => {
    const { products } = this.state;
    const defaultProps = {
      onPageChange: this.handlePageChange,
      onLogOut: this.handleLogOut,
    };

    switch (page) {
      case "login":
        return <Login onLogin={this.handleLogin} />;
      case "dashboard":
        return <Dashboard {...defaultProps} products={products} />;
      case "bag-items":
        return <Checkout {...defaultProps} />;
      case "view":
        return <View {...defaultProps} />;
      default:
        return <Login />;
    }
  };

  render() {
    return (
      <>
        <Login onPage={this.handlePage} />
      </>
    );
  }
}
export default App;

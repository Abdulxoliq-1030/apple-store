import React, { Component } from "react";
import Login from "./pages/login/login";
import "./assets/styles/base.scss";
import Dashboard from "./pages/dashboard/dashboard";

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

  handleSubmit = () => {};

  handlePageChange = (page) => {
    this.setState({ page: page });
  };

  render() {
    switch (this.state.page) {
      case "login":
        return <Login onLogin={this.handleLogIn} />;
      case "dashboard":
        return (
          <Dashboard
            addBagItem={this.addBagItem}
            onInputChange={this.handleInputChange}
            onPageChange={this.handlePageChange}
            products={this.state.products}
            bagItems={this.state.bagItems}
          />
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

import React, { Component } from "react";
// import Login from "./pages/login/login";
import "./assets/styles/base.scss";
import Dashboard from "./pages/dashboard/dashboard";
// import View from "./pages/view/view";
// import Checkout from "./pages/checkout/checkout";
import products from "./products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      products: products,
    };
  }

  handleSubmit = () => {};

  render() {
    // console.log(this.state.products[9].computer);
    return (
      <>
        {/* <Login onSubmit={this.handleSubmit} /> */}
        <Dashboard products={this.state.products} />
      </>
    );
  }
}
export default App;

import React, { Component } from "react";
import Login from "./pages/login/login";
import "./assets/styles/base.scss";
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
    return (
      <>
        <Login onSubmit={this.handleSubmit} />
      </>
    );
  }
}
export default App;

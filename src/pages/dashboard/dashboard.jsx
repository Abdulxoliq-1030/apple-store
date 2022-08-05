import React, { Component } from "react";
import ProductCard from "./components/card/card";
import "./dashboard.scss";


class Dashboard extends Component {
  render() {
    return (
      <div>
        <ProductCard />
      </div>
    );
  }
}

export default Dashboard;

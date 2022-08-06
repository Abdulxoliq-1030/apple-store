import React, { Component } from "react";
import ProductCard from "./components/card/card";
import Bag from "../../common/bag/bag";
import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <ProductCard />
        <Bag />
      </div>
    );
  }
}

export default Dashboard;

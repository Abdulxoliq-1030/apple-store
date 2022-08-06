import React, { Component } from "react";
import ProductCard from "./components/card/card";
import Bag from "../../common/bag/bag";
import "./dashboard.scss";
import Sidebar from "../../common/sidebar/sidebar";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <ProductCard />
        <Bag />
      </div>
    );
  }
}

export default Dashboard;

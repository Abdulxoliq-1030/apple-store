import React, { Component } from "react";
import ProductCard from "./components/card/card";
import Bag from "../../common/bag/bag";
import Sidebar from "../../common/sidebar/sidebar";
import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    // console.log(this.props.products);
    return (
      <div className="dashboard">
        <Sidebar />
        <ProductCard products={this.props.products} />
        <Bag />
      </div>
    );
  }
}

export default Dashboard;

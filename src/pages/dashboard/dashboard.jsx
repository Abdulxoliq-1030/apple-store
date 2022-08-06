import React, { Component } from "react";
import ProductCard from "./components/card/card";
import Bag from "../../common/bag/bag";
import Sidebar from "../../common/sidebar/sidebar";
import "./dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar onPageChange={this.props.onPageChange} />
        <ProductCard products={this.props.products} />
        <Bag onPageChange={this.props.onPageChange} />
      </div>
    );
  }
}

export default Dashboard;

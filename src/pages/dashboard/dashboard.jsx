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
        <Sidebar onPageChange={this.props.onPageChange} />
        <ProductCard
          addBagItem={this.props.addBagItem}
          onInputChange={this.props.onInputChange}
          products={this.props.products}
        />
        <Bag
          bagItems={this.props.bagItems}
          onPageChange={this.props.onPageChange}
        />
      </div>
    );
  }
}

export default Dashboard;

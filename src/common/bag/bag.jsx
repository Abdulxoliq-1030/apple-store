import Button from "../button/button";
import { HandleBag } from "../../assets/icons";
import products from "../../products";
import "./bag.scss";
import React, { Component } from "react";

class Bag extends Component {
  render() {
    const { onPageChange, pageName, onProduct, btnLabel } = this.props;
    return (
      <div className="bag">
        <h1>Bag</h1>
        <div className="products">
          {products.map((product) => (
            <img
              onClick={() => onProduct(product.id)}
              key={product.id}
              src={product.imgURL}
              alt=""
            />
          ))}
        </div>
        <h4>Bag Total: $ 5,856.21 </h4>
        <button onClick={() => onPageChange(pageName)}> {HandleBag} {btnLabel}</button>
      </div>
    );
  }
}

export default Bag;

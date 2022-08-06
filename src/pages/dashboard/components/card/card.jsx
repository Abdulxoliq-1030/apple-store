import React, { Component } from "react";
import Search from "../search/search";
import { BagAdd } from "../../../../assets/icons/index";
import Button from "../../../../common/button/button";
import products from "../../../../products";
import "./card.scss";

class ProductCard extends Component {
  render() {
    return (
      <div className="general">
        <Search />
        <div className="container">
          {products.map((product, idx) => (
            <div key={idx} className="mini-container">
              <div className="img-container">
                <img src={product.imgURL} alt="" />
              </div>
              <div className="title-container">
                <h2> {product.name} </h2>
                <h3> {product.model} </h3>
              </div>
              <div className="price-container">
                <h2> ${product.price} </h2>
                <Button btnIcon={BagAdd} btnLabel={""} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductCard;

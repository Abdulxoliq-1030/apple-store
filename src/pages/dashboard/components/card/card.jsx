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
        <div className="search">
          <input
            onChange={this.props.onInputChange}
            type="text"
            placeholder="Apple Watch, Samsung S21, Mackbook Pro,..."
          />
        </div>
        <div className="container">
          {this.props.products.map((product, idx) => (
            <div
              key={idx}
              className={`mini-container ${
                product.computer && "big-container"
              }`}
            >
              <div
                onClick={() =>  
                this.props.onPageChange("view", product)
                }
                className="img-container"
              >
                <img src={product.imgURL} alt="" />
              </div>
              <div className="title-container">
                <h2> {product.name} </h2>
                <h3> {product.model} </h3>
              </div>
              <div className="price-container">
                <h2> ${product.price} </h2>

                {/* <Button btnLabel={""} /> */}
                <button onClick={() => this.props.addBagItem(product)}>
                  {BagAdd}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductCard;

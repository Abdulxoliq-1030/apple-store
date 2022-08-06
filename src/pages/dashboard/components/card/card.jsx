import React, { Component } from "react";
import Search from "../search/search";
import { BagAdd } from "../../../../assets/icons/index";
import Button from "../../../../common/button/button";
import products from "../../../../products";
import "./card.scss";

class ProductCard extends Component {
  state = {
    renderProducts: products,
    productsName: "",
  };

  handleChange = (e) => {
    this.setState({ productsName: e.target.value });
    this.filterProducts();
  };

  filterProducts = () => {
    let keys = ["name", "model"];
    let temp =
      this.state.renderProducts !== ""
        ? products.filter((product) =>
            keys.some((key) =>
              product[key].toLowerCase().includes(this.state.productsName)
            )
          )
        : products;
    this.setState({ renderProducts: temp });
  };

  render() {
    return (
      <div className="general">
        {/* <Search /> */}
        <div className="search">
          <input
            type="text"
            placeholder="Apple Watch, Samsung S21, Mackbook Pro,..."
            onChange={this.handleChange}
          />
        </div>
        <div className="container">
          {this.state.renderProducts.map((product, idx) => (
            <div
              key={idx}
              className={`mini-container ${
                product.computer && "big-container"
              }`}
            >
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

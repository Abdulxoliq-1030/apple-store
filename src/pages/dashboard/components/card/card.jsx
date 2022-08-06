import React, { Component } from "react";
import Search from "../search/search";
import { BagAdd } from "../../../../assets/icons/index";
import Button from "../../../../common/button/button";
import products from "../../../../products";
import "./card.scss";

class ProductCard extends Component {
  state = {
    productss: products,

    productName: "",
  };

  handleChange = async (event) => {
    await this.setState({ productName: event.target.value });
    this.filterProducts();
  };
  filterProducts = () => {
    let temp =
      this.state.productName !== ""
        ? products.filter(
            (product) =>
              product.name
                .toLowerCase()
                .includes(this.state.productName.toLowerCase()) ||
              product.model
                .toLowerCase()
                .includes(this.state.productName.toLowerCase())
          )
        : products;
    this.setState({ productss: temp });
  };

  render() {
    // console.log(this.state.productss);
    return (
      <div className="general">
        {/* <Search /> */}
        <div className="search">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Apple Watch, Samsung S21, Mackbook Pro,..."
          />
        </div>
        <div className="container">
          {this.state.productss.map((product, idx) => (
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

import React, { Component } from "react";
import { BagAdd } from "../../../../assets/icons/index";
import Button from "../../../../common/button/button";
// import macImg from "../../../../assets/images/mackbook.png";
import products from "../../../../products";
import "./card.scss";

class ProductCard extends Component {
  render() {
    return (
      <>
        {products.map((product, idx) => (
          <div className="container">
            <div className="mini-container  big-card">
              <div className="img-container">
                <img src={product.imgURL} alt="" />
              </div>
              <div className="title-container">
                <h2> Macbook Pro 16” </h2>
                <h3>Silver - M1 Pro</h3>
              </div>
              <div className="price-container">
                <h2>$ 3249.99</h2>
                <Button btnIcon={BagAdd} btnLabel={""} />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ProductCard;

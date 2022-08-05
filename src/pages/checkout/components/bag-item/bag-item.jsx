import React from "react";
import StarRate from "../../../../common/star-rate/star-rate";
import img from "../../assets/images/dell-gray.png";
import "./bag-item.scss";

function BagItem() {
  return (
    <div className="bag-item">
      <img src={img} alt="" />
      <div className="product-about">
        <h1>Dell XPS 13</h1>
        <h4 className="product-color">White</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam{" "}
        </p>
        <StarRate />
        <div className="price-item">
          <span>$ 1799.99 x 1</span>
          <div className="amount">
            <span className="minus">-</span>
            <span className="count">1</span>
            <span className="plus">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BagItem;

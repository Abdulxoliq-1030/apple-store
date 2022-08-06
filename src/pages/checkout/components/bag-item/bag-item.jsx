import React from "react";
import StarRate from "../../../../common/star-rate/star-rate";
import "./bag-item.scss";
import image from "../../../../assets/images/apple-watch.png";

function BagItem() {
  return (
    <div className="bag-item">
      <img src={image} alt="" />
      <div className="product-about">
        <h1>Dell XPS 13</h1>
        <h4 className="product-color">White</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam{" "}
        </p>
        <div className="rate">
          <StarRate />
          <span>4.5 / 5</span>
        </div>
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

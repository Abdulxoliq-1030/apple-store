import React from "react";
import StarRate from "../../../../common/star-rate/star-rate";
import "./bag-item.scss";
import image from "../../../../assets/images/apple-watch.png";

function BagItem({ amount, onDec, onInc }) {
  let price = 14.99;
  let count = amount || 1;
  return (
    <div className="bag-item">
      <img src={image} alt="UNDEFINED CHIQDI" />
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
          <span>{`$ ${price * amount} x ${amount}`}</span>
          <div className="amount">
            <span className="minus" onClick={onDec(amount)}>
              -
            </span>
            <span className="count">{count}</span>
            <span className="plus" onClick={onInc(amount)}>
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BagItem;

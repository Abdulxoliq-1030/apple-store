import React, { Component } from "react";
// import products from "../../../../products";
import img from "../../../../assets/images/apple-watch.png";
import { bagAdd } from "../../../../assets/icons/index";
import "./mini-card.scss";

class MiniCard extends Component {
  render() {
    return (
      <div className="mini-container">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="title-container">
          <h2>Apple Watch</h2>
          <h3>Series 5 SE</h3>
        </div>
        <div className="price-container">
          <h2>$ 529.99</h2>
          {bagAdd}
        </div>
      </div>
    );
  }
}

export default MiniCard;

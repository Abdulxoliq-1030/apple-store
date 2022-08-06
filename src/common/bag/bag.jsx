import Button from "../button/button";
import { HandleBag } from "../../assets/icons";
import products from "../../products";
import "./bag.scss";

import React, { Component } from "react";

class Bag extends Component {
  handleProduct = (selectedIdx) => {
    if (selectedIdx) {
      alert("Aniq o'chirmoqchimisiz");
      console.log(selectedIdx);
    }
  };

  render() {
    const { handleProduct } = this;
    return (
      <div className="bag">
        <h1>Bag</h1>
        <div className="products">
          {products.map((product, idx) => (
            <img
              onClick={() => handleProduct(idx)}
              key={product.id}
              src={product.imgURL}
              alt=""
            />
          ))}
        </div>
        <h4>Bag Total: $ 5,856.21 </h4>
        <Button btnIcon={HandleBag} btnLabel={"View Bag"} />
      </div>
    );
  }
}

export default Bag;

import Button from "../button/button";
import { HandleBag } from "../../assets/icons";
import products from "../../products";
import "./bag.scss";

import React, { Component } from "react";

class Bag extends Component {



  handleProduct = (selectedIdx) => {
    if (selectedIdx) {
      alert("Aniq o'chirmoqchimisiz");
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
              key={idx}
              
              src={product.imgURL}
              alt=""
            />
          ))}
        </div>
        <Button btnIcon={HandleBag} btnLabel={"View Bag"} />
      </div>
    );
  }
}

export default Bag;

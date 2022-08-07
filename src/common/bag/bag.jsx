import Button from "../button/button";
import { HandleBag } from "../../assets/icons";
import products from "../../products";
import "./bag.scss";

import React, { Component } from "react";

class Bag extends Component {
  state = {
    totalPrice: 0,
  };
  componentDidMount = () => {
    this.setState({ totalPrice: this.props.bagItems.length });
  };

  handleProduct = (selectedIdx) => {
    if (selectedIdx) {
      alert("Aniq o'chirmoqchimisiz");
      // console.log(selectedIdx);
    }
  };

  render() {
    // const { handleProduct } = this;
    console.log(this.state.totalPrice);
    return (
      <div className="bag">
        <h1>Bag</h1>
        <div className="products">
          {this.props.bagItems.map((product, idx) => (
            <img
              // onClick={() => handleProduct(idx)}
              key={product.id}
              src={product.imgURL}
              alt=""
            />
          ))}
        </div>
        <h4>Bag Total: {this.state.totalPrice} </h4>
        <Button
          onPageChange={this.props.onPageChange}
          btnIcon={HandleBag}
          btnLabel={"View Bag"}
        />
      </div>
    );
  }
}

export default Bag;

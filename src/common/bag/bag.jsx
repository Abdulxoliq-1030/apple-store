import Button from "../button/button";
import { HandleBag } from "../../assets/icons";
// import products from "../../products";
import "./bag.scss";
import React, { Component } from "react";

class Bag extends Component {
  // componentDidMount = () => {
  //   this.setState({ totalPrice: this.props.bagItems.length });
  // };

  // handleProduct = (selectedIdx) => {
  //   if (selectedIdx) {
  //     alert("Aniq o'chirmoqchimisiz");
  //     // console.log(selectedIdx);
  //   }
  // };
  render() {
    const {
      bagItems,
      onPageChange,
      pageName,
      onProduct,
      btnLabel,
      totalPrice,
    } = this.props;

    return (
      <div className="bag">
        <h1>Bag</h1>
        <div className="products">
          {bagItems
            ? bagItems.map((product) => (
                <img
                  onClick={() => onProduct(product.id)}
                  key={product.id}
                  src={product.imgURL}
                  alt=""
                />
              ))
            : null}
        </div>

        <h4>Bag Total: $ {totalPrice}.00 </h4>
        <Button
          pageName={pageName}
          onPageChange={onPageChange}
          btnIcon={HandleBag}
          btnLabel={btnLabel}
        />
      </div>
    );
  }
}

export default Bag;

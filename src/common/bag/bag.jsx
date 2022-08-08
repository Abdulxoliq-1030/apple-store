import Button from "../button/button";
import { HandleBag } from "../../assets/icons";
import "./bag.scss";
import React, { Component } from "react";

class Bag extends Component {
  render() {
    const {bagItems,onPageChange,pageName,btnLabel,totalPrice,removeBagItem,
    } = this.props;
    console.log(totalPrice);
    return (
      <div className="bag">
        <h1>Bag</h1>
        <div className="products">
          {bagItems
            ? bagItems.map((product) => (
                <img
                  onClick={()=>removeBagItem(product)}
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

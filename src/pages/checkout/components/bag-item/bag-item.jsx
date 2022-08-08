import React, { Component } from "react";
import Rate from "../../../../common/rate/rate";
import "./bag-item.scss";

export class bagItem extends Component {
  state = {
    mount: 1,
    itemTotalPrice: this.props.bagItem.price,
  };
  counter = (oper) => {
    let temp = this.state.mount;
    let temp1 = +this.state.itemTotalPrice;

    if (oper === "+") {
      temp1 = +temp1 + +this.props.bagItem.price;
      temp += 1;
    } else {
      temp1 = +temp1 - +this.props.bagItem.price;
      temp -= 1;
      if (temp === 0) {
        return null;
      }
    }

    this.setState({ mount: temp, itemTotalPrice: temp1 });
  };
  render() {
    const { bagItem } = this.props;
    const { mount, itemTotalPrice } = this.state;
    return (
      <div className="bag-item">
        <img src={bagItem.imgURL} alt="" />
        <div className="product-about">
          <h1>{bagItem.name}</h1>
          <h4 className="product-color">{bagItem.model}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam{" "}
          </p>
          <div className="rate">
            <Rate rate={bagItem.rate} />
            <span>{bagItem.rate}</span>
          </div>
          <div className="price-item">
            <span>
              $ {itemTotalPrice} x {mount}
            </span>
            <div className="amount">
              <span onClick={() => this.counter("-")} className="minus">
                -
              </span>
              <span className="count">{mount}</span>
              <div onClick={() => this.counter("+")} className="plus">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default bagItem;

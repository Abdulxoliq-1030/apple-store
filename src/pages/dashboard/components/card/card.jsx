import React from "react";
import { BagAdd } from "../../../../assets/icons/index";
import "./card.scss";

const ProductCard = ({ onInputChange, products, onPageChange, addBagItem }) => {
  return (
    <div className="general">
      {/* <Search /> */}
      <div className="search">
        <input
          onChange={onInputChange}
          type="text"
          placeholder="Apple Watch, Samsung S21, Mackbook Pro,..."
        />
      </div>
      <div className="container">
        {products.map((product, idx) => (
          <div
            key={idx}
            className={`mini-container ${product.computer && "big-container"}`}
          >
            <div
              onClick={() => onPageChange("view", product)}
              className="img-container"
            >
              <img src={product.imgURL} alt="" />
            </div>
            <div className="title-container">
              <h2> {product.name} </h2>
              <h3> {product.model} </h3>
            </div>
            <div className="price-container">
              <h2> ${product.price} </h2>

              {/* <Button btnLabel={""} /> */}
              <button onClick={() => addBagItem(product)}>{BagAdd}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

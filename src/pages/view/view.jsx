import { BagAdd,Back } from "../../assets/icons";
import Sidebar from "../../common/sidebar/sidebar";
import Bag from "../../common/bag/bag";
import Rate from "../../common/rate/rate";
import "./view.scss";
const View = ({addBagItem,bagItems,onPageChange,onLogOut,viewProduct,totalPrice,removeBagItem}) => {

  const images = [viewProduct.imgURL, viewProduct.imgURL, viewProduct.imgURL];

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
  pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet
  imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat,
  tincidunt lorem mi duis. Vitae elementum libero.`;

  return (
    <div className="genview">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <div className="view">
        <div onClick={() => onPageChange("dashboard")} className="back">
          {Back} Back
        </div>
        <div className="item">
          <div className="img-box">
            <div className="img-container">
              {images.map((image, idx) => (
                <div key={idx} className="image">
                  <img src={image} />
                </div>
              ))}
            </div>
            <img src={viewProduct.imgURL}  />
          </div>
          <div className="info">
            <h2 className="name">{viewProduct.name}</h2>
            <span className="series">{viewProduct.model}</span>
            <div className="rate">
              <div className="starts">
                <Rate rate={viewProduct.rate} />
              </div>
              <span>{viewProduct.rate}</span>
            </div>
            <span className="price">$ {viewProduct.price}</span>
            <p>
              {text}
            </p>
          </div>
        </div>

        <div className="btn">
          <button onClick={() => addBagItem(viewProduct)}>
            {BagAdd} Add to Bag
          </button>
        </div>
        <div className="description">
          <span className="title">Description</span>
          <p>{viewProduct.description}</p>
        </div>
      </div>
      <Bag
        pageName={"checkout"}
        onPageChange={onPageChange}
        removeBagItem={removeBagItem}
        totalPrice={totalPrice}
        bagItems={bagItems}
        btnLabel={"View Bag"}
      />
    </div>
  );
};

export default View;

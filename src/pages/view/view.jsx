import "./view.scss";
import apple from "../../assets/images/apple-watch.png";
import { BagAdd } from "../../assets/icons";
import { Back } from "../../assets/icons";
import Sidebar from "../../common/sidebar/sidebar";
import Bag from "../../common/bag/bag";
import StarRate from "../../common/star-rate/star-rate";

const View = ({
  addBagItem,
  bagItems,
  onPageChange,
  onLogOut,
  viewProduct,
  totalPrice,
  removeBagItem,
}) => {
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
              <div className="image">
                <img src={viewProduct.imgURL} alt={apple} />
              </div>
              <div className="image">
                <img src={viewProduct.imgURL} alt={apple} />
              </div>
              <div className="image">
                <img src={viewProduct.imgURL} alt={apple} />
              </div>
            </div>
            <img src={viewProduct.imgURL} alt={apple} />
          </div>
          <div className="info">
            <h2 className="name">{viewProduct.name}</h2>
            <span className="series">{viewProduct.model}</span>
            <div className="rate">
              <div className="starts">
                <StarRate rate={viewProduct.rate} />
              </div>
              <span>{viewProduct.rate}</span>
            </div>
            <span className="price">$ {viewProduct.price}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet
              imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat,
              tincidunt lorem mi duis. Vitae elementum libero.
            </p>
          </div>
        </div>

        <div className="btn">
          {/* <Button btnIcon={BagAdd} btnLabel="Add to Bag" /> */}
          <button onClick={() => addBagItem(viewProduct)}>
            {BagAdd} Add to Bag
          </button>
        </div>

        <span className="line"></span>

        <div className="description">
          <span className="title">Description</span>
          <p>{viewProduct.description}</p>
        </div>
      </div>

      <Bag
        removeBagItem={removeBagItem}
        totalPrice={totalPrice}
        bagItems={bagItems}
        btnLabel={"View Bag"}
      />
    </div>
  );
};

export default View;

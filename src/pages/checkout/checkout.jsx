import BagItems from "./components/bag-items/bag-items";
import Bag from "../../common/bag/bag";
import "./checkout.scss";
import Sidebar from "../../common/sidebar/sidebar";

const Checkout = ({ onPageChange, onLogOut, onProduct }) => {
  return (
    <div className="checkout">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <BagItems title={"Check your Bag Items"} />
      <Bag
        onPageChange={onPageChange}
        pageName={"check-user"}
        onProduct={onProduct}
        btnLabel={"Checkout"}
      />
    </div>
  );
};

export default Checkout;

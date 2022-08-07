import BagItems from "./components/bag-items/bag-items";
import Bag from "../../common/bag/bag";
import "./checkout.scss";
import Sidebar from "../../common/sidebar/sidebar";

const Checkout = ({ onPageChange, onLogOut, onProduct }) => {
  return (
    <div className="checkout">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <BagItems />
      <Bag
        onPageChange={onPageChange}
        pageName={"view"}
        onProduct={onProduct}
      />
    </div>
  );
};

export default Checkout;

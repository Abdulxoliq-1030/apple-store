import BagItems from "./components/bag-items/bag-items";
import Bag from "../../common/bag/bag";
import "./checkout.scss";
import Sidebar from "../../common/sidebar/sidebar";

const Checkout = ({ onPageChange }) => {
  return (
    <div className="checkout">
      <Sidebar onPageChange={onPageChange} />
      <BagItems />
      <Bag />
    </div>
  );
};

export default Checkout;

import BagItems from "./components/bag-items/bag-items";
import Bag from "../../common/bag/bag";
import "./checkout.scss";
import Sidebar from "../../common/sidebar/sidebar";

const Checkout = () => {
  return (
    <div className="checkout">
      <Sidebar />
      <BagItems />
      <Bag />
    </div>
  );
};
 
export default Checkout;

import BagItems from "../../common/bag-items/bag-items";
import Bag from "../../common/bag/bag";
import "./checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <BagItems />
      <Bag />
    </div>
  );
};

export default Checkout;

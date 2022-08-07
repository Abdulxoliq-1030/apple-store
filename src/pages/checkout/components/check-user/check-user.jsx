import Sidebar from "../../../../common/sidebar/sidebar";
import BagItem from "../bag-item/bag-item";
import OrderSummary from "../order-summary/order-summary";
import ShippingAddress from "../shipping-address/shipping-address";
import "./check-user.scss";

const CheckUser = ({ onPageChange, onLogOut, userData }) => {
  return (
    <div className="check-user">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <div className="bag-items">
        <h1>Checkout</h1>
        <ShippingAddress onPageChange={onPageChange} userData={userData} />
        <BagItem />
      </div>
      <OrderSummary onPageChange={onPageChange} />
    </div>
  );
};

export default CheckUser;

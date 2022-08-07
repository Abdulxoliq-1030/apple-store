import Sidebar from "../../../../common/sidebar/sidebar";
import BagItems from "../bag-items/bag-items";
import OrderSummary from "../order-summary/order-summary";
import "./check-user.scss";

const CheckUser = ({ onPageChange, onLogOut }) => {
  return (
    <div className="check-user">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <BagItems title={"Checkout"} />
      <OrderSummary />
    </div>
  );
};

export default CheckUser;

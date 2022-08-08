import Sidebar from "../../../../common/sidebar/sidebar";
import BagItem from "../bag-item/bag-item";
import OrderSummary from "../order-summary/order-summary";
import ShippingAddress from "../shipping-address/shipping-address";
import "./check-user.scss";

const CheckUser = ({bagItems,onPageChange,onLogOut,userData,onInputLabel,totalPrice,
}) => {
  return (
    <div className="check-user">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <div className="bag-items">
        <h1>Checkout</h1>
        <ShippingAddress
          onPageChange={onPageChange}
          userData={userData}
          onInputLabel={onInputLabel}
        />
        {bagItems !== [] ? (
          bagItems.map((bagItem) => <BagItem bagItem={bagItem} />)
        ) : (
          <h1>Bag is Empty</h1>
        )}
      </div>
      <OrderSummary totalPrice={totalPrice} onPageChange={onPageChange} />
    </div>
  );
};

export default CheckUser;

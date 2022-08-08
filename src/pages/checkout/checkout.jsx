import BagItems from "./components/bag-items/bag-items";
import Bag from "../../common/bag/bag";
import "./checkout.scss";
import Sidebar from "../../common/sidebar/sidebar";

const Checkout = ({
  bagItems,
  onPageChange,
  onLogOut,
  onProduct,
  totalPrice,
  removeBagItem,
}) => {
  return (
    <div className="checkout">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <BagItems bagItems={bagItems} title={"Check your Bag Items"} />
      <Bag
        removeBagItem={removeBagItem}
        totalPrice={totalPrice}
        bagItems={bagItems}
        onPageChange={onPageChange}
        pageName={"check-user"}
        onProduct={onProduct}
        btnLabel={"Checkout"}
      />
    </div>
  );
};

export default Checkout;

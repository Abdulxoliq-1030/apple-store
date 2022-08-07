import ProductCard from "./components/card/card";
import Bag from "../../common/bag/bag";
import Sidebar from "../../common/sidebar/sidebar";
import "./dashboard.scss";

function Dashboard({
  onInputChange,
  addBagItem,
  products,
  onPageChange,
  onLogOut,
  onProduct,
  bagItems,
  totalPrice,
}) {
  return (
    <div className="dashboard">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <ProductCard
        onInputChange={onInputChange}
        addBagItem={addBagItem}
        products={products}
      />
      <Bag
        totalPrice={totalPrice}
        onPageChange={onPageChange}
        pageName={"view"}
        onProduct={onProduct}
        btnLabel={"View Bag"}
        bagItems={bagItems}
      />
    </div>
  );
}

export default Dashboard;

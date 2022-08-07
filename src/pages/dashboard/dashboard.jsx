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

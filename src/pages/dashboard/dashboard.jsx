import ProductCard from "./components/card/card";
import Bag from "../../common/bag/bag";
import Sidebar from "../../common/sidebar/sidebar";
import "./dashboard.scss";

function Dashboard({ products, onPageChange, onLogOut, onProduct }) {
  return (
    <div className="dashboard">
      <Sidebar onPageChange={onPageChange} onLogOut={onLogOut} />
      <ProductCard products={products} />
      <Bag
        onPageChange={onPageChange}
        pageName={"view"}
        onProduct={onProduct}
      />
    </div>
  );
}

export default Dashboard;

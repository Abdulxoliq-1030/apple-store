import { Back } from "../../../../assets/icons/index";
import "./order-summary.scss";

export default function OrderSummary({ onPageChange, totalPrice }) {
  let usluga = totalPrice / 100;
  return (
    <div className="order-wrap">
      <div className="order-summary">
        <h4>Order Summary</h4>
        <div className="prices">
          <div className="order-price">
            <span>Items:</span>
            <span>$ {totalPrice}.00 </span>
          </div>
          <div className="order-price">
            <span>Shipping:</span>
            <span>$ {usluga}.00 </span>
          </div>
        </div>
        <div className="order-total">
          <span>Order Total:</span>
          <span>$ {totalPrice+usluga}.00</span>
        </div>
        <button>Place your order</button>
      </div>

      <button onClick={() => onPageChange("checkout")}> {Back} Back</button>
    </div>
  );
}

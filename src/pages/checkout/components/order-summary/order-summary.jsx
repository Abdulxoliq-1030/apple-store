import { Back } from "../../../../assets/icons/index";
import "./order-summary.scss";

export default function OrderSummary() {
  return (
    <div className="order-wrap">
      <div className="order-summary">
        <h4>Order Summary</h4>
        <div className="prices">
          <div className="order-price">
            <span>Items:</span>
            <span>$ 5,849.22 </span>
          </div>
          <div className="order-price">
            <span>Shipping:</span>
            <span>$ 6.99 </span>
          </div>
        </div>
        <div className="order-total">
          <span>Order Total:</span>
          <span>$ 5,856.21</span>
        </div>
        <button>Place your order</button>
      </div>

      <button> {Back} Back</button>
    </div>
  );
}

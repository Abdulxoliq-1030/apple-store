import BagItem from "../bag-item/bag-item";
import "./bag-items.scss";

export default function BagItems() {
  return (
    <div className="bag-items">
      <h1>Check your Bag Items</h1>
      <div className="items">
        <BagItem />
      </div>
    </div>
  );
}

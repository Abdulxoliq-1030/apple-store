import BagItem from "../bag-item/bag-item";
import "./bag-items.scss";

export default function BagItems({ title }) {
  return (
    <div className="bag-items">
      <h1>{title}</h1>
      <div className="items">
        <BagItem />
        <BagItem />
      </div>
    </div>
  );
}

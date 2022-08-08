import BagItem from "../bag-item/bag-item";
import "./bag-items.scss";

export default function BagItems({ title, bagItems }) {
  return (
    <div className="bag-items">
      <h1>{title}</h1>
      <div className="items">
        {bagItems !== [] ? (
          bagItems.map((bagItem) => <BagItem bagItem={bagItem} />)
        ) : (
          <h1>Bag is Empty</h1>
        )}
      </div>
    </div>
  );
}

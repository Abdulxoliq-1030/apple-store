import BagItem from "../bag-item/bag-item";
import "./bag-items.scss";

export default function BagItems({ title, onInc, onDec, amount }) {
  return (
    <div className="bag-items">
      <h1>{title}</h1>
      <div className="items">
        <BagItem onDec={onDec} onInc={onInc} amount={amount} />
        <BagItem onDec={onDec} onInc={onInc} amount={amount} />
      </div>
    </div>
  );
}

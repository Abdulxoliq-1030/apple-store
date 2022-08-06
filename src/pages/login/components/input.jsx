import "../login.scss";

const Input = ({ labelText, placeholderText, ref }) => {
  return (
    <div className="control">
      <label>{labelText}</label>
      <input ref={ref} required type="text" placeholder={placeholderText} />
    </div>
  );
};

export default Input;

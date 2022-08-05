import "../login.scss";

const Input = ({ labelText, placeholderText }) => {
  return (
    <div className="control">
      <label>{labelText}</label>
      <input type="text" placeholder={placeholderText} />
    </div>
  );
};

export default Input;

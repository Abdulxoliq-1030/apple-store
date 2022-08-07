import "./button.scss";

function Button({ btnIcon, btnLabel, onPageChange }) {
  return (
    <button onClick={() => onPageChange("checkout")}>
      {btnIcon} {btnLabel}
    </button>
  );
}
export default Button;

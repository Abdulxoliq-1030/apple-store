import "./button.scss";
function Button({ btnIcon, btnLabel, onPageChange, pageName }) {
  return (
    <button onClick={() => onPageChange(pageName)}>
      {btnIcon} {btnLabel}
    </button>
  );
}
export default Button;

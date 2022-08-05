import "./button.scss";

function Button({ btnIcon, btnLabel }) {
  return (
    <button>
      {btnIcon} {btnLabel}
    </button>
  );
}
export default Button;

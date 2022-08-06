import Button from "../../common/button/button";
import Input from "./components/input";
import "./login.scss";

const inputs = [
  {
    label: "Shipping Name",
    placeholder: "John Maker",
  },
  {
    label: "Street Name",
    placeholder: "123 Plae Grond Stret",
  },
  {
    label: "City",
    placeholder: "Vermont",
  },
  {
    label: "State / Province",
    placeholder: "California",
  },
  {
    label: "Country",
    placeholder: "United States of America",
  },
];

const Login = () => {
  return (
    <form className="login">
      {inputs.map((input, idx) => (
        <Input
          key={idx}
          labelText={input.label}
          placeholderText={input.placeholder}
        />
      ))}
      <Button btnLabel={"Login"} />
    </form>
  );
};

export default Login;

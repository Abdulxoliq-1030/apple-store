import Button from "../../common/button/button";
import Input from "./components/input";
import "./login.scss";
const Login = () => {
  return (
    <div className="login">
      <Input placeholderText={"PlaceholderText"} labelText={"labelText"} />
      <Input placeholderText={"PlaceholderText"} labelText={"labelText"} />
      <Input placeholderText={"PlaceholderText"} labelText={"labelText"} />
      <Input placeholderText={"PlaceholderText"} labelText={"labelText"} />
      <Input placeholderText={"PlaceholderText"} labelText={"labelText"} />
      <Button btnIcon={"<icon>"} btnLabel={"Login"} />
    </div>
  );
};

export default Login;

import React, { Component } from "react";
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

class Login extends Component {
  render() {
    return (
      <div className="login">
        {inputs.map((input, idx) => (
          <Input
            key={idx}
            labelText={input.label}
            placeholderText={input.placeholder}
          />
        ))}
        <Button btnLabel={"Login"} />
      </div>
    );
  }
}

export default Login;

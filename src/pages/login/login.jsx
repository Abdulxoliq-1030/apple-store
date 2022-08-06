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
  constructor(props) {
    super(props);

    this.refs = [
      (this.inputName = React.createRef()),
      (this.inputStreetName = React.createRef()),
      (this.inputCity = React.createRef()),
      (this.inputState = React.createRef()),
      (this.inputCountry = React.createRef()),
    ];
  }

  render() {
    const { onSubmit } = this.props;
    const { name, streetName, city, state, country } = this.refs;
    console.log();
    return (
      <div className="login">
        {inputs.map((input, idx) => (
          <Input
            ref={this.refs[idx]}
            key={idx}
            labelText={input.label}
            placeholderText={input.placeholder}
          />
        ))}
        <Button btnLabel={"Login"} />
        <button
          onClick={() => onSubmit(name, streetName, city, state, country)}
        >
          Click
        </button>
      </div>
    );
  }
}

export default Login;

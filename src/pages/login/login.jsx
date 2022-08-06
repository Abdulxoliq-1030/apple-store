import React, { Component } from "react";
import Button from "../../common/button/button";
import Input from "./components/input";
import "./login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.userName = React.createRef();
    this.userStreetName = React.createRef();
    this.userCity = React.createRef();
    this.userState = React.createRef();
    this.userCountry = React.createRef();

    this.state = {
      user: [
        this.userName,
        this.userStreetName,
        this.userCity,
        this.userState,
        this.userCountry,
      ],
    };
  }

  render() {
    const {userName,userStreetName,userCity,userState,userCountry,onLogin,
    } = this.state;
    return (
      <div className="login">
        <Input
          userName={userName}
          userStreetName={userStreetName}
          userCity={userCity}
          userState={userState}
          userCountry={userCountry}
        />
        <button onClick={onLogin}>Login</button>
      </div>
    );
  }
}

export default Login;

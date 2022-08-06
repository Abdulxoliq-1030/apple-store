import React, { Component } from "react";
import Input from "./components/input";
import "./login.scss";

class Login extends Component {
  render() {
    const {
      userName,
      userStreetName,
      userCity,
      userState,
      userCountry,
      onLogin,
    } = this.props;
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

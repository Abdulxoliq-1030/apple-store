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
      <form onSubmit={() => onLogin()} className="login">
        <Input
          userName={userName}
          userStreetName={userStreetName}
          userCity={userCity}
          userState={userState}
          userCountry={userCountry}
          onLogin={onLogin}
        />
      </form>
    );
  }
}

export default Login;

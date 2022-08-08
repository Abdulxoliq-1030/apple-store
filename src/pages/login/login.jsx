import React from "react";
import Input from "./components/input";
import "./login.scss";

const Login = ({
  userName,
  userStreetName,
  userCity,
  userState,
  userCountry,
  inputLabel,
  onLogin,
}) => {
  return (
    <form onSubmit={() => onLogin()} className="login">
      <Input
        userName={userName}
        userStreetName={userStreetName}
        userCity={userCity}
        userState={userState}
        userCountry={userCountry}
        onLogin={onLogin}
        inputLabel={inputLabel}
      />
    </form>
  );
};

export default Login;

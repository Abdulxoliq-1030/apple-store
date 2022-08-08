import React from "react";
import Inputs from "./components/inputs";
import "./login.scss";

function Login({ inputLabel, onLogin }) {
  const userName = React.createRef();
  const userStreetName = React.createRef();
  const userCity = React.createRef();
  const userState = React.createRef();
  const userCountry = React.createRef();
  return (
    <form onSubmit={() => onLogin(userName, userStreetName, userCity, userState, userCountry)} className="login">
      <Inputs
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
}
export default Login;

import { Component } from "react";

import Login from "./pages/login/login";
import "./assets/styles/base.scss";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Login />
      </>
    );
  }
}
export default App;

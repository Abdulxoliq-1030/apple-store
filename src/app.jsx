import { Component } from "react";

import Login from "./pages/login/login";
import "./assets/styles/base.scss";
import Dashboard from "./pages/dashboard/dashboard";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Dashboard />
      </>
    );
  }
}
export default App;

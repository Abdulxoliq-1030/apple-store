import { Component } from "react";
import "./assets/styles/base.scss";
import Dashboard from "./pages/dashboard/dashboard";
// import View from "./pages/view/view";
// import Checkout from "./pages/checkout/checkout";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <Checkout /> */}
        <Dashboard />
      </>
    );
  }
}
export default App;

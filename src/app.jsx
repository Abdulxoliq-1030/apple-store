import { Component } from "react";
import "./assets/styles/base.scss";
import Checkout from "./pages/checkout/checkout";
import Dashboard from "./pages/dashboard/dashboard"
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

import { Component } from "react";
import Login from "./pages/login/login";
import "./assets/styles/base.scss";
import View from "./pages/view/view";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <Login /> */}
        <View/>
      </>
    );
  }
}
export default App;

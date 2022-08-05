import { Component } from "react";
import products from "./products";

class App extends Component {
  state = {};

  render() {
    return <div className="App">Apple Watch
    <div>{products}</div>
    </div>;
  }
}

export default App;

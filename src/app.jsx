import React, { Component } from "react";
import Login from "./pages/login/login";
import "./assets/styles/base.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  handleSubmit = (name, streetName, city, state, country) => {
    const inputValues = {
      name: name.current.value,
      streetName: streetName.current.value,
      city: city.current.value,
      state: state.current.value,
      country: country.current.value,
    };
    this.setState({ user: inputValues });
  };

  // clickHandler = () => {
  //   alert(this.inpuRef.current.value);
  // };

  render() {
    console.log(this.state.user);
    return (
      <>
        <Login onSubmit={this.handleSubmit} />
      </>
    );
  }
}
export default App;

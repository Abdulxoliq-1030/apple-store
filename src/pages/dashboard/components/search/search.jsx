import React, { Component } from "react";
import "./seabrch.scss";
class Search extends Component {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Apple Watch, Samsung S21, Mackbook Pro,..."
        />
      </div>
    );
  }
}

export default Search;

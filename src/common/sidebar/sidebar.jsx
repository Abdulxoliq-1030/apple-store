import React, { Component } from "react";
import { HandleBag, LogOut, StoreFont } from "../../assets/icons";

import "./sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <button onClick={() => this.props.onPageChange("dashboard")}>
            {StoreFont}
          </button>
          <button onClick={() => this.props.onPageChange("checkout")}>
            {HandleBag}
          </button>
        </div>
        <button className="logOut">{LogOut}</button>
      </div>
    );
  }
}

export default Sidebar;


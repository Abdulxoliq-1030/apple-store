import React, { Component } from "react";
import { HandleBag, LogOut, StoreFont } from "../../assets/icons";
import Button from "../button/button";
import "./sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <button>{StoreFont}</button>
          <button>{HandleBag}</button>
        </div>
        <button className="logOut">{LogOut}</button>
      </div>
    );
  }
}

export default Sidebar;

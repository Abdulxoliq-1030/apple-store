import React, { Component } from "react";
import MiniCard from "./components/mini-card/mini-card";
import BigCard from "./components/big-card/big-card";
import "./dashboard.scss";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <MiniCard />
        <BigCard />
      </div>
    );
  }
}

export default Dashboard;

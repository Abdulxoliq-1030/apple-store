import React, { Component } from "react";
import { EmptyStar, FilledStar } from "../../assets/icons";
import "./star-rate.scss";

export class StarRate extends Component {
  render() {
    return (
      <div className="starRate">
        {FilledStar}
        {FilledStar}
        {FilledStar}
        {EmptyStar}
        {EmptyStar}
      </div>
    );
  }
}

export default StarRate;

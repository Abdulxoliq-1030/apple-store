import React, { Component } from "react";
import { EmptyStar, FilledStar } from "../../assets/icons";
import "./star-rate.scss";

<<<<<<< HEAD
export default function starRate() {
  return (
    <div className="starRate">
      <Heart />
    </div>
  );
=======
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
>>>>>>> 7fe20e6de27c7edbb1d6c389f08549826440d673
}

export default StarRate;

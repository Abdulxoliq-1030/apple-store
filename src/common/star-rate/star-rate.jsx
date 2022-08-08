import React from "react";
import { EmptyStar, FilledStar, HalfStar } from "../../assets/icons";
import "./star-rate.scss";

const StarRate = ({ rate }) => {
  let prop = rate ? rate : 0; //shetga 3.5 urniga this.props dan kelgan qiymat teng buladi
  let filled = new Array(Math.floor(prop)).fill(1);
  let half = prop - Math.floor(prop) === 0.5 && 1;
  let empty = new Array(5 - half - filled.length).fill(1);

  return (
    <div className="starRate">
      {filled.map(() => FilledStar)}
      {half && HalfStar}
      {empty.map(() => EmptyStar)}
    </div>
  );
};

export default StarRate;

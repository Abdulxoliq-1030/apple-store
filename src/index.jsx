import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "./assets/styles/main.scss";
// import StarRate from "./common/star-rate/star-rate";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
    {/* <StarRate /> */}
  </div>
);

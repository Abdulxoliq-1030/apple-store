import { HandleBag, LogOut, StoreFont } from "../../assets/icons";

import "./sidebar.scss";

function Sidebar({ onPageChange, onLogOut }) {
  return (
    <div className="sidebar">
      <div>
        <button onClick={() => onPageChange("dashboard")}>{StoreFont}</button>
        <button onClick={() => onPageChange("checkout")}>{HandleBag}</button>
      </div>
      <button className="logOut" onClick={() => onLogOut("login")}>
        {LogOut}
      </button>
    </div>
  );
}

export default Sidebar;

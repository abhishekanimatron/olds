import React from "react";

import "./SideDrawer.css";
const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/global">Global</a>
        </li>
        <li>
          <a href="/saved">Saved</a>
        </li>
        <li>
          <a href="/others">Others</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;

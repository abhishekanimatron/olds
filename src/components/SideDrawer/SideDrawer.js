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
          <img
            src="/icons/arrow-right-circle.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
        </li>
        <li>
          <a href="/global">Global</a>{" "}
          <img
            src="/icons/arrow-right-circle.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
        </li>
        <li>
          <a href="/saved">Saved</a>{" "}
          <img
            src="/icons/arrow-right-circle.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
        </li>
        <li>
          <a href="/others">Others</a>{" "}
          <img
            src="/icons/arrow-right-circle.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;

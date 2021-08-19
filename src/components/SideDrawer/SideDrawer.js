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
        <img src="/images/side.jpg" alt="sidebar" id="sidebar-image" />
        <div id="sidebar-head">
          <h3>The News</h3>
        </div>
        <li>
          <img
            src="/icons/home.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
          <a href="/">Home</a>
        </li>
        <li>
          <img
            src="/icons/database.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
          <a href="/category">Category</a>{" "}
        </li>
        <li>
          <img
            src="/icons/umbrella.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
          <a href="/weather">Weather</a>{" "}
        </li>
        <li>
          <img
            src="/icons/github.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
          <a href="/about">About</a>{" "}
        </li>
        <p id="copyright-msg">Made With 🖤 by Olds </p>
      </ul>
    </nav>
  );
};

export default sideDrawer;

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
          <a href="/">Home</a>
          <img
            src="/icons/arrow-right-circle.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
        </li>
        <li>
          <a href="/category">Category</a>{" "}
          <img
            src="/icons/arrow-right-circle.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
        </li>
        <li>
          <a href="/weather">Weather</a>{" "}
          <img
            src="/icons/arrow-right-circle.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
        </li>
        <li>
          <a href="/about">About</a>{" "}
          <img
            src="/icons/arrow-right-circle.svg"
            alt="arrow"
            aria-hidden="true"
            className="right-arrow"
          />
        </li>
        <p id="copyright-msg">© Olds Corp. 2021 </p>
      </ul>
    </nav>
  );
};

export default sideDrawer;

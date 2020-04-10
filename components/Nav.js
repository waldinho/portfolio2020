import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/portfolio">
        Portfolio
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item" href="/resume">
        Resume
      </a>
    </Menu>
  );
};

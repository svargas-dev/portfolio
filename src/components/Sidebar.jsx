import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    // Pass on our props
    <Menu {...props} className="hamburger-menu">
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/portfolio">
        Portfolio
      </Link>

      <Link className="menu-item" to="/contact">
        Contact
      </Link>

      <Link className="menu-item" to="/howimadeit">
        How I made this
      </Link>
    </Menu>
  );
};
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import DrawerToggleButton from "./drawerToggleButton";

const NavBar = ({ onDrawTogglerClick }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary-3 fixed-top"
      style={{ height: 60 }}
    >
      <button
        type="button"
        id="sidebarCollapse"
        className="btn btn-primary btn-sm"
        onClick={onDrawTogglerClick}
      >
        <DrawerToggleButton />
      </button>
      <a
        className="navbar-brand navbar-brand-dynamic-color"
        href="/"
        style={{ marginLeft: 20 }}
      >
        CAMPUSX
      </a>
    </nav>
  );
};

export default NavBar;

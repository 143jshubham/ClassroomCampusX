import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary-3 fixed-top"
      style={{ height: 60 }}
    >
      <button
        type="button"
        id="sidebarCollapse"
        className="btn btn-primary btn-sm"
      >
        <FontAwesomeIcon icon={faAlignLeft} />
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

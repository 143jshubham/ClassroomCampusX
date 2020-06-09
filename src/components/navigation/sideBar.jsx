import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChartLine,
  faBookOpen,
  faUsers,
  faDice,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

const SideBar = ({ onDrawTogglerClick }) => {
  return (
    <nav id="sidebar" className="bg-primary">
      <div className="sidebar-header ml-1 bg-primary" style={{ marginTop: 20 }}>
        <h3 className="text-white" style={{ marginTop: 45 }}>
          Hi {localStorage.getItem("fname")}
        </h3>
      </div>

      <ul className="list-unstyled components" style={{ paddingLeft: 15 }}>
        <li>
          <NavLink to="/" onClick={onDrawTogglerClick}>
            <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
            {"   "}Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline" onClick={onDrawTogglerClick}>
            <FontAwesomeIcon icon={faHourglass} />
            {"   "}Timeline
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-courses" onClick={onDrawTogglerClick}>
            <FontAwesomeIcon icon={faBookOpen} />
            {"   "}My Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-class" onClick={onDrawTogglerClick}>
            <FontAwesomeIcon icon={faUsers} />
            {"   "}My Class
          </NavLink>
        </li>
        <li>
          <NavLink to="/fun-cards" onClick={onDrawTogglerClick}>
            <FontAwesomeIcon icon={faDice} />
            {"   "}Fun-cards
          </NavLink>
        </li>
      </ul>
      <ul className="list-unstyled" style={{ paddingLeft: 15 }}>
        <li>
          <NavLink to="/profile" onClick={onDrawTogglerClick}>
            <FontAwesomeIcon icon={faUser} />
            {"   "}My Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" onClick={onDrawTogglerClick}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            {"   "}Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;

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

const SideBar = (props) => {
  function handleClick(e){
    props.handleClose()
}
  return (
    <nav id="sidebar" className="bg-primary">
      <div
        className="bg-light text-primary"
        id="dismiss"
        style={{ marginTop: 60 }}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginTop: 5 }} />
      </div>
      <div className="sidebar-header ml-1 bg-primary" style={{ marginTop: 20 }}>
        <h3 className="text-white" style={{ marginTop: 45 }}>
          Hi Nitish
        </h3>
      </div>

      <ul className="list-unstyled components" style={{ paddingLeft: 15 }}>
        <li>
          <NavLink to="">
            <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
            {"   "}Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <FontAwesomeIcon icon={faHourglass} />
            {"   "}Timeline
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <FontAwesomeIcon icon={faBookOpen} />
            {"   "}My Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-class">
            <FontAwesomeIcon icon={faUsers} />
            {"   "}My Class
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <FontAwesomeIcon icon={faDice} />
            {"   "}Fun-cards
          </NavLink>
        </li>
      </ul>
      <ul className="list-unstyled" style={{ paddingLeft: 15 }}>
        <li>
          <NavLink to="">
            <FontAwesomeIcon icon={faUser} />
            {"   "}My Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} />
            {"   "}Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;

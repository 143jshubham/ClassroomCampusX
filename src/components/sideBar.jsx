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

const SideBar = () => {
  return (
    <nav id="sidebar" className="bg-primary">
      <div
        className="bg-light text-primary"
        id="dismiss"
        style={{ marginTop: 60 }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginTop: 5 }} />
      </div>
      <div className="sidebar-header ml-1 bg-primary" style={{ marginTop: 60 }}>
        <h3 className="text-white" style={{ marginTop: 65 }}>
          Hi Nitish
        </h3>
      </div>
      <ul className="list-unstyled components" style={{ paddingLeft: 15 }}>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>
            {"   "}Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHourglass} />
            {"   "}Timeline
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faBookOpen} />
            {"   "}My Courses
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faUsers} />
            {"   "}My Class
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faDice} />
            {"   "}Fun-cards
          </a>
        </li>
      </ul>
      <ul className="list-unstyled" style={{ paddingLeft: 15 }}>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faUser} />
            {"   "}My Profile
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faSignOutAlt} />
            {"   "}Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;

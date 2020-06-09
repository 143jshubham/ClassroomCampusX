import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const ProfileLinks = ({ profileInfo }) => {
  return (
    <div className="container ">
      <div className="row infopro">
        <div className="col-lg-12 col-md-12 col-12"></div>
        <div className="col-md-6 col-6 mt-5">
          <div className="card">
            <div className="visit">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="fa"
                size="4x"
                aria-hidden="true"
              />
            </div>

            <a href={profileInfo["linkedin"]} target="_blank">
              {" "}
              Linkedin profile
            </a>
          </div>
        </div>
        <div className="col-md-6 col-6 mt-5">
          <div className="card rcard">
            <div className="visit">
              <FontAwesomeIcon
                icon={faGithub}
                className="fa"
                size="4x"
                aria-hidden="true"
              />
            </div>

            <a href={profileInfo["github"]} target="_blank">
              {" "}
              Github profile
            </a>
          </div>
        </div>

        <div className="col-md-6 col-6 mt-5">
          <div className="card ">
            <div className="visit">
              <FontAwesomeIcon
                icon={faMedium}
                className="fa"
                color="white"
                size="4x"
                aria-hidden="true"
              />
            </div>

            <a href={profileInfo["medium"]} target="_blank">
              Medium profile
            </a>
          </div>
        </div>
        <div className="col-md-6 col-6 mt-5">
          <div className="card rcard">
            <div className="visit">
              <FontAwesomeIcon
                icon={faUserCircle}
                size="4x"
                className="fa"
                color="white"
                aria-hidden="true"
              />
            </div>
            <a href={profileInfo["portfolio"]} target="_blank">
              {" "}
              Portfolio profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLinks;

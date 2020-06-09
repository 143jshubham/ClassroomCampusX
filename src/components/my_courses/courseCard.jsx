import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="col-md-4 col-6 coursecard">
      <Link to={`/my-courses/${course[0]}`}>
        <div
          className="card shadow-lg m-1 border-success"
          style={{ borderWidth: "medium" }}
        >
          <div className="card-body p-1">
            <div className="row">
              <div className="col-3 playicon">
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  size="3x"
                  className="m-1 playicon"
                />
              </div>
              <div className="col-9">
                <h5 className="m-1">{course[1]}</h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;

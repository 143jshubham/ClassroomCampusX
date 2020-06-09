import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Students from "./students";
import Pagination from "../common/pagination";

class Classmates extends Component {
  state = {
    currentPage: 1,
    studentsPerPage: 7,
  };
  setCurrentPage = (pageNumber) => {
    const currentPage = pageNumber;
    this.setState({ currentPage });
  };
  render() {
    const { classmatesInfo } = this.props;
    const { currentPage, studentsPerPage } = this.state;
    if (classmatesInfo === null) {
      return <h6 className="align-center m-3">Loading...</h6>;
    } else {
      const indexOfLastStudent = currentPage * studentsPerPage;
      const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
      const currentStudents = classmatesInfo.slice(
        indexOfFirstStudent,
        indexOfLastStudent
      );
      const paginate = (pageNumber) => this.setCurrentPage(pageNumber);

      return (
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ padding: -20, height: 600 ,marginBottom:20}}>
              <div className="card-body">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="float-left">
                      <h6>Your Classmates</h6>
                    </div>
                    {/* <div className="float-right">
                      <a href="#" className="pull-left inline-block mr-15 m-1">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                      </a>
                      <a
                        href="#"
                        className="pull-left inline-block close-panel m-1"
                        data-effect="fadeOut"
                      >
                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                      </a>
                    </div> */}
                    <div className="clearfix"></div>
                  </div>
                  <div className="panel-wrapper">
                    <div className="panel-body row">
                      <div className="table-wrap sm-data-box-2">
                        <div className="table-responsive">
                          <table className="table  top-countries mb-0">
                            <tbody>
                              <Students classmatesInfo={currentStudents} />
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Pagination
                  postsPerPage={studentsPerPage}
                  totalPosts={classmatesInfo.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Classmates;
/*
const Classmates = ({ classmatesInfo }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div
          className="card"
          style={{ padding: -20, height: 300, overflowY: "scroll" }}
        >
          <div className="card-body">
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="float-left">
                  <h6>Your Classmates</h6>
                </div>
                <div className="float-right">
                  <a href="#" className="pull-left inline-block mr-15 m-1">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                  </a>
                  <a
                    href="#"
                    className="pull-left inline-block close-panel m-1"
                    data-effect="fadeOut"
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </a>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="panel-wrapper">
                <div className="panel-body row">
                  <div className="table-wrap sm-data-box-2">
                    <div className="table-responsive">
                      <table className="table  top-countries mb-0">
                        <tbody>
                          <Students classmatesInfo={classmatesInfo} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classmates;
*/

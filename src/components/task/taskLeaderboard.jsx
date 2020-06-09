import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const TaskLeaderboard = ({ marksBatchmates, show }) => {
  return (
    <div className="card shadow-lg">
      <div className="card-header bg-primary-3">
        <h4 className="text-md-center text-light">Leaderboard</h4>
      </div>
      {marksBatchmates.length !== 0 ? (
        <div>
          <div className=" overflow-auto" style={{ height: 300 }}>
            <table className="table table-bordered table-striped mb-0">
              <thead className="first bg-primary">
                <tr>
                  <th className="text-white">Name</th>
                  <th className="text-white">Score</th>
                </tr>
              </thead>
              <tbody>
                {marksBatchmates.map((marksBatchmate) => {
                  return (
                    <tr>
                      <td>
                        {marksBatchmate[2] == 1 ? (
                          <FontAwesomeIcon
                            icon={faMedal}
                            color="bg-primary"
                            className="ml-1 mr-2"
                          />
                        ) : null}
                        {show === 1 ? (
                          <a href={marksBatchmate[3]} target="_blank">
                            {marksBatchmate[0]}
                          </a>
                        ) : (
                          <span>{marksBatchmate[0]}</span>
                        )}
                      </td>
                      <td>{marksBatchmate[1]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p>
              <strong>*Click on the name to view submissions</strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body align-items-center d-flex justify-content-center">
            <h4 className="text-center">
              <strong>No one has submitted yet</strong>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskLeaderboard;

import React from "react";

const Leaderboard = ({ leaderBoardList }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Leaderboard</h5>
        <div style={{ height: 300, overflowY: "scroll" }}>
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderBoardList.map((user) => {
                return (
                  <tr key={user[0]}>
                    <td>{user[0]}</td>
                    <td>{user[1]}</td>
                    <td>{user[2]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

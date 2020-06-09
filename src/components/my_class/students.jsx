import React from "react";

const Students = ({ classmatesInfo }) => {
  return classmatesInfo.map((classmate) => {
    return (
      <tr>
        <td>
          <img
            src={classmate[0]}
            alt="country"
            style={{ width: 40, height: 40, borderRadius:`50%`,marginRight:`20px`}}
          />
          <span>
            {classmate[1]} {classmate[2]}
          </span>
        </td>
      </tr>
    );
  });
};

export default Students;

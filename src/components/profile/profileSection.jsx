import React from "react";

const ProfileSection = ({ profileInfo }) => {
  return (
    <div className="profilesec">
      <div className="card  shadow-lg">
        <img
          src={profileInfo["dp"]}
          className="card-img-top center avatar"
          onerror="this.onerror=null; this.src='https://profile-images-campusx.s3.us-east-2.amazonaws.com/default.png'"
          alt=""
        />
        <div className="card-body">
          <table className="table table-bordered table-striped mb-0">
            <thead className="first">
              <tr>
                <th>
                  Name <span>:</span>
                </th>
                <th className="Information">
                  {profileInfo["first_name"]} {profileInfo["last_name"]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="first">
                <th>
                  College <span>:</span>
                </th>
                <th className="Information">{profileInfo["college"]}</th>
              </tr>
              <tr className="first">
                <th>
                  Branch <span>:</span>
                </th>
                <th className="Information">{profileInfo["branch"]}</th>
              </tr>
              <tr className="first">
                <th>
                  Passing Year <span>:</span>
                </th>
                <th className="Information">{profileInfo["passing_year"]}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;

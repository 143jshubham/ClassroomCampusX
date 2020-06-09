import React from "react";

const Gyan = ({ activity }) => {
  return (
    <div className="card m-1 border border-info">
      <div className="card-body">
        <h6 className="card-text float-right">{activity[4]}</h6>
        <br />
        <h6
          className="card-text"
          dangerouslySetInnerHTML={{ __html: activity[1] }}
        ></h6>
        <h6 className="card-title">
          <strong>{activity[5]["name"]}</strong>
        </h6>
        <p className="card-subtitle">{activity[5]["category"]}</p>
        <a href="url={{ activity.5['url'] }}" target="_blank">
          <div className="card">
            <img
              src="{{ activity.5['image'] }}"
              className="card-img-top"
              alt="https://profile-images-campusx.s3.amazonaws.com/custom-trackable-short-url-feature.png"
              style="height: 300px"
            />
            <div className="card-body">
              <h6>
                <strong>{activity[5]["title"]}</strong>
              </h6>
              <p>{activity[5]["description"]}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Gyan;

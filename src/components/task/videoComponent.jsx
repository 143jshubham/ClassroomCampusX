import React from "react";

const VideoComponent = ({ videoType, videoUrl }) => {
  return (
    <div className="taskvideo">
    <div className="card">
      <div className="card-header" id={"heading" + videoType}>
        <h2 className="mb-0">
          <button
            className="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target={"#collapse" + videoType}
            aria-expanded="false"
            aria-controls={"collapse" + videoType}
          >
            {videoType + " Video"}
          </button>
        </h2>
      </div>

      <div
        id={"collapse" + videoType}
        className="collapse"
        aria-labelledby={"heading" + videoType}
        data-parent="#accordionExample"
      >
        <div className="card-body align-items-center d-flex justify-content-center">
          {videoUrl !== "" ? (
            <iframe
              id="iframe2"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoUrl}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <h4 className="text-center">
              <strong>No {videoType} Video Added Yet</strong>
            </h4>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default VideoComponent;

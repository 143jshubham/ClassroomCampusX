import React from "react";

const CourseVideo = ({ video }) => {
  console.log({ video });
  return (
    <div className="coursevideo">
      <div className="card">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CourseVideo;

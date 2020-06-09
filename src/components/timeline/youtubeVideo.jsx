import React from "react";

const YoutubeVideo = ({ activity }) => {
  return (
    <div class="card m-1 border border-warning">
      <div class="card-body">
        <h6 class="card-text float-right">{activity[4]}</h6>
        <br />
        <h6
          className="card-text"
          dangerouslySetInnerHTML={{ __html: activity[1] }}
        ></h6>
        <iframe
          width="100%"
          height="300px"
          src={`https://www.youtube.com/embed/${activity[3]}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;

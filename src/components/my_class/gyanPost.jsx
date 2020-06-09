import React from "react";

const GyanPost = ({ post }) => {
  return (
    <div className="feedgyan">
      <p class="card-subtitle">{post["category"]}</p>
      <p class="mt-1 mb-1">{post["message"]}</p>
      <a href={post["url"]} target="_blank">
        <div class="card">
          <img
            src={post["image"]}
            class="card-img-top"
            alt="https://profile-images-campusx.s3.amazonaws.com/custom-trackable-short-url-feature.png"
            style={{ height:280 }}
          />
          <div class="card-body">
            <h6>
              <strong>{post["title"]}</strong>
            </h6>
            <p>{post["description"]}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GyanPost;

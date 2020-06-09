import React from "react";
import GyanPost from "./gyanPost";
import Post from "./post";

const ClassFeed = ({ posts }) => {
  if (posts !== null) {
    return posts.map((post) => {
      return (
        <div class="col-12 mt-3 feedcard">
          <div class="card shadow-lg d-flex flex-wrap">
            <div class="card-body">
              <h6 class="card-title">
                <strong>{post["name"]}</strong>
              </h6>
              {post["feed_type"] === "Link" ? (
                <GyanPost post={post} />
              ) : (
                <Post post={post} />
              )}
            </div>
          </div>
        </div>
      );
    });
  } else {
    return <div></div>;
  }
};

export default ClassFeed;

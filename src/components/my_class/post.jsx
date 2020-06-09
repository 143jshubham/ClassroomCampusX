import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <p class="mt-1 mb-1">{post["message"]}</p>
    </div>
  );
};

export default Post;

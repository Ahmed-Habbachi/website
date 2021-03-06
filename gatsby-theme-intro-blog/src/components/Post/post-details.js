import React from "react";
// import PostBy from "./post-by";
import PostOn from "./post-on";
import PostCategory from "./post-category"
import PostTags from "./post-tags"

const PostDetails = ({post, className}) => (
  <div className={`flex flex-col space-x-0 space-y-2 sm:space-x-2 sm:space-y-0 sm:flex-row items-baseline ${className}`}>
      {/* <PostBy author={author} /> */}
      <PostOn date={post.date} />
      <PostCategory category={post.category}/>
      <PostTags tags={post.tags} />
  </div>
);

export default PostDetails;

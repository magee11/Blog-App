import React from "react";
import Feed from "../Feed/Feed";

const Home = ({ posts, setPost }) => {
  return (
    <div>
      {posts.length ? <Feed posts={posts} /> : <p> No post to Display </p>}
    </div>
  );
};

export default Home;

import React from "react";
import Post from "../Posts/Post";

const Feed = ({posts}) => {
  return (
    <main>
        {posts.map(post =>(
            <Post key={post.id} post={post}/>
        ))}
    </main>
  );
};

export default Feed;

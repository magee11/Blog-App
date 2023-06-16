import React from "react";
import Post from "../Posts/Post";
import './style.css';
const Feed = ({posts}) => {
  return (
    <main className="feedItems">
        {posts.map(post =>(
            <Post className="postItems" key={post.id} post={post}/>
        ))}
    </main>
  );
};

export default Feed;

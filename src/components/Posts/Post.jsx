import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Post = ({ post }) => {
  return (
    <div className="postPage">
      <Link className="link" to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.datetime}</p>
        <p>{post.body}</p>
      </Link>
    </div>
  );
};

export default Post;

import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main>
      {post && (
        <div className="postItem">
          <div>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
          </div>
          <div>
            <button onClick={() => handleDelete(post.id)}>delete</button>
          </div>
        </div>
      )}
      {!post && (
        <>
          <h2>Post Not Fount</h2>
          <p>May be user may delete it </p>
          <Link to={"/"}>Back to Home page</Link>
        </>
      )}
    </main>
  );
};

export default PostPage;

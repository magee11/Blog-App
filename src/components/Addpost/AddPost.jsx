import React from "react";
import "./style.css";

const AddPost = ({
  postTitle,
  postBody,
  setPostTitle,
  setPostBody,
  handleSubmit,
}) => {
  return (
    <div>
      <div className="addPost">
        <form action="" onSubmit={handleSubmit}>
          <label className="heading">New Post</label>
          <br />
          <label className="title"> Title </label>
          <br />
          <input
            className="intputfield"
            type="text"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
          />
          <br />
          <label className="title"> Post </label>
          <br />
          <br />
          <input
            className="intputfieldpost"
            type="text"
            value={postBody}
            onChange={(e) => {
              setPostBody(e.target.value);
            }}
          />
          <br />
          <button className="submitButton" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;

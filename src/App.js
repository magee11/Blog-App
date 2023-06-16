import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AddPost from "./components/Addpost/AddPost";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import PostPage from "./components/PostPage/PostPage";
import Post from "./components/Posts/Post";
import { compareAsc, format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
    //   JSON.parse(localStorage.getItem("Item List"))
    // ) || [
    {
      id: 1,
      title: "Game",
      datetime: "July 12 2003 12:12:12",
      body: "To check whether the dependency has been installed or not , go to package.json and checkout in the dependencies. ",
    },
    {
      id: 2,
      title: "Computers",
      datetime: "July 12 2003 12:12:12",
      body: "To check whether the dependency has been installed or not , go to package.json and checkout in the dependencies. ",
    },
    {
      id: 3,
      title: "Working",
      datetime: "July 12 2003 12:12:12",
      body: "To check whether the dependency has been installed or not , go to package.json and checkout in the dependencies. ",
    },
    {
      id: 4,
      title: "MacBook air",
      datetime: "July 12 2003 12:12:12",
      body: "To check whether the dependency has been installed or not , go to package.json and checkout in the dependencies. ",
    },
    {
      id: 5,
      title: "Books",
      datetime: "July 12 2003 12:12:12",
      body: "To check whether the dependency has been installed or not , go to package.json and checkout in the dependencies. ",
    }]
  );
  const [search, setSearch] = useState("");
  const [searchresults, setSearchresults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();
  console.log(searchresults);

  const handleDelete = (id) => {
    const postList = posts.filter((posts) => posts.id !== id);
    setPosts(postList);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = "July 12 2003 12:12:12";
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    localStorage.setItem("Item List", JSON.stringify(allPosts));
    setPostBody("");
    setPostTitle("");
    navigate("/");
  };

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchresults(filteredResults);
  }, [search, posts]);

  return (
    <div className="App">
      <Header title={"Blog APP"} />
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home posts={searchresults} setPosts={setPosts} />}
        />

        <Route
          exact
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route
          exact
          path="/addpost"
          element={
            <AddPost
              postTitle={postTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              setPostTitle={setPostTitle}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";
import "./index.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <NavLink
          to={`/post/${post.id}`}
          style={{ display: "block" }}
          key={post.id}
        >
          {post.title}
        </NavLink>
      ))}
    </div>
  );
};

const Profile = () => {
  return <div>Profile</div>;
};

const About = () => {
  return <h1>About</h1>;
};

const Settings = () => {
  return <h1>Settings</h1>;
};

const SayUser = () => {
  const params = useParams();
  return <div>User Name is {params.userName}</div>;
};

const PostPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  if(data === null) return <h3>Loading</h3>
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userName" element={<SayUser />} />
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Settings />} />
        </Route>
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

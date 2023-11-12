import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const Home = () => {
  return <h1>Home</h1>;
};

const Profile = () => {
  return <div>Profile</div>;
};

const About = () => {
  return <h1>About</h1>;
};

const Settings = () => {
  return (
    <h1>Settings</h1>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='account'>
          <Route path='profile' element={<Profile />} />
          <Route path='setting' element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

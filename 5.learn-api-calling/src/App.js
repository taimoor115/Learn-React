import React, { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./Components/UserCard";
import { RandomUser } from "./API/index";
import { getPosts } from "./API/index";
import PostCard from "./Components/PostCard";
function App() {
  const [data, setData] = useState(null);
  const [random, setRandom] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    RandomUser().then((random) => setRandom(random.results[0]));
  }, []);

  function refresh() {
    RandomUser().then((random) => setRandom(random.results[0]));
  }

  return (
    <div className="App">
      {random && <UserCard data={random} />}
      <button onClick={refresh}>Refresh User</button>

      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;

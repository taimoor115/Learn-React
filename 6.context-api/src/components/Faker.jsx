import React, { useState } from "react";

const Faker = () => {
  const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json);
    });

  return (
    <div>
      {data.map((data) => (
        <div>{data.title}</div>
      ))}
    </div>
  );
};

export default Faker;

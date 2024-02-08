import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setData] = useState([]);
  const id = "4c45e381";
  const api = "4a43794e1f3488761636a30e3d14218d";

  useEffect(() => {
    axios
      .get("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    console.log(data);
  });
  return <div></div>;
};

export default Homepage;

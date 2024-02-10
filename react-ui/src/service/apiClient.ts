import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5131e1c3844a43339e74f0747bba1116",
  },
});

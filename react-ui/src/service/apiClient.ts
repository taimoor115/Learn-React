import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dd7f51cb6dc5463e8df90dbd90a699d3",
  },
});

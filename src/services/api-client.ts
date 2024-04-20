import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "842e827a4e234bd1b0eef1422f045985",
  },
});
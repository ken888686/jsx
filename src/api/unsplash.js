import axios from "axios";

const url = "https://api.unsplash.com";
const accessKey = "QCKK_06vZ2JcZGMVx0hf-FCu1qk5UCyPJWMa4O9sluQ";

export default axios.create({
  baseURL: url,
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});

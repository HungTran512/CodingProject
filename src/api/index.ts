import axios from "axios";

const baseURL = "https://dummyjson.com/products";

const api = axios.create({
  baseURL,
});

export default api;

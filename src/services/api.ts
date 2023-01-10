import axios from "axios";

const api = axios.create({
  baseURL: "https://inventory-control-8sgc.onrender.com/",
});

export default api;

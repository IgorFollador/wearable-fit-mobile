import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.api.bodypath.com.br/"
})

export default api;

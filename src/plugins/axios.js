import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.0.103:8090",
  withCredentials: true,
});

export { http };
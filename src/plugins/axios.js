import axios from "axios";

const http = axios.create({
  baseURL: "https://hosting-backend.onrender.com",
  withCredentials: true,
});

export { http };

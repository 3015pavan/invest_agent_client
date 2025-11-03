// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Optional: attach auth token if you’re using JWT
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

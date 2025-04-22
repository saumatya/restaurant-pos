import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:3000", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000'; // Backend server URL
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// export default axios;
// src/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Ensure this points to your backend server
});

export default axiosInstance;

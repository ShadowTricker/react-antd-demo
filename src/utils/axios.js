import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4440'
});

export default axiosInstance;
import { VITE_BACKEND_URL } from "../constants/environment.js";
import axios from "axios";

const appName = "payment";
const appVersion = "v1";

const axiosInstance = axios.create({
  baseURL: VITE_BACKEND_URL + "/" + appName + "/" + appVersion,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);

      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } else {
      console.error("Network Error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

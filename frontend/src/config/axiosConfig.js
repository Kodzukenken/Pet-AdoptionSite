import axios from "axios";
import {API_URL } from "./endpoints";

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers:{

    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
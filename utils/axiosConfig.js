"use client"

import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;


const instance = axios.create({
    baseURL: backendUrl,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        
    }
})

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("refershToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log(config)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
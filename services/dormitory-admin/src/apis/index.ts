import axios from 'axios';

export const instance = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000",
    baseURL: "http://localhost:5000/api",
});

instance.interceptors.request.use(
    config => {
        return config;
    }, 
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
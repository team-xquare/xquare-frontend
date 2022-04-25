import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL || "https://localhost:3000",
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
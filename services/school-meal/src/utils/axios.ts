import axios from 'axios';

export const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/meals`,
    timeout: 10000,
    withCredentials: true,
});
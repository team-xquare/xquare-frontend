import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.xquare.app/applications',
    timeout: 10000,
});

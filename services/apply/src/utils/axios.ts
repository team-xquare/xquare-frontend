import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://stag-api.xquare.app/applications',
    timeout: 10000,
    withCredentials: true,
});

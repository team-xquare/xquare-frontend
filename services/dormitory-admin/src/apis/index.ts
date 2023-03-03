import axios from 'axios';

const testToken =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NmZhNTQ1YS00NjA1LTQyMjgtYWE5OS1iZTNjZTBhMGIzMjMiLCJyb2xlIjoiRE9SIiwiZXhwIjoxNjc3ODM3NTY1LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiRE9SIl19.Ltfdsw3i9ADqXByA3RceznBySN3A68JRoswUNj67_04';

export const pointInstance = axios.create({
    baseURL: 'https://stag-api.xquare.app/points',
});

export const feedInstance = axios.create({
    baseURL: 'https://stag-api.xquare.app/feeds',
});

process.env.NODE_ENV === 'development' &&
    (pointInstance.defaults.headers.common['Authorization'] = testToken);
process.env.NODE_ENV === 'development' &&
    (feedInstance.defaults.headers.common['Authorization'] = testToken);

// instance.interceptors.request.use(
//     (config) => {
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );

// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );

import axios from 'axios';

const testToken =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzk0YTk1NC0xMzhjLTQ5OTEtOWYwYS00NWFjMzI4MTViNWIiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc3NzMzMDc4LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiU1RVIl19.RGj8lc0rPUdOkzcyvfrZr2PuFrkBwOC5s_8Cj3LdSOc';

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

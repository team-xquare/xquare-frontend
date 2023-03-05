import axios from 'axios';

const testToken = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjE0YjRkYi1mNzIzLTRiNDMtYjRkNS0xYmI2N2VkODAyODkiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc3OTQ2MjM3LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiU1RVIiwiU1RDIiwiQ0xMIl19.EQ1fUKYSpM9hT__aMyqED6DpSMntAiakua3jsASMo38`;

export const instance = axios.create({
    baseURL: 'https://stag-api.xquare.app/feeds',
    timeout: 10000,
    withCredentials: true,
});

export const authoritiesInstance = axios.create({
    baseURL: 'https://stag-api.xquare.app/authorities',
    timeout: 10000,
    withCredentials: true,
});

// process.env.NODE_ENV === 'development' &&
//     (instance.defaults.headers.common['Authorization'] = testToken);

// process.env.NODE_ENV === 'development' &&
//     (authoritiesInstance.defaults.headers.common['Authorization'] = testToken);

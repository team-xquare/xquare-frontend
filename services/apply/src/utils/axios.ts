import axios from 'axios';

const testToken =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzk0YTk1NC0xMzhjLTQ5OTEtOWYwYS00NWFjMzI4MTViNWIiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc3MjIyNTU3LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiU1RVIl19.AhVpm9QdgFlvxVxSy6GP--SvFtWekIooQA_GzI0ceyI';

export const instance = axios.create({
    baseURL: 'https://stag-api.xquare.app/applications',
    timeout: 10000,
    withCredentials: true,
});

process.env.NODE_ENV === 'development' &&
    (instance.defaults.headers.common['Authorization'] = testToken);

export const pickInstance = axios.create({
    baseURL: 'https://stag-api.xquare.app/pick',
    timeout: 10000,
    withCredentials: true,
});

process.env.NODE_ENV === 'development' &&
    (pickInstance.defaults.headers.common['Authorization'] = testToken);

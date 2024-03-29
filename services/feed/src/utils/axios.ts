import axios from 'axios';

const testToken = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNjMyNjEzMi0zMDM1LTM0MzctMmQzMy0zMDY1NjQyZDM0MzUiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjkyOTAxNTg2LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiVUtOIiwiU1RVIl19.QOB2Vp1ZG0S9XGHm7BvHzsAwAkn0k6fJBdEY7Yjl9rQ`;
export const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/feeds`,
    timeout: 10000,
    withCredentials: true,
});

export const authoritiesInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/authorities`,
    timeout: 10000,
    withCredentials: true,
});

export const attachmentInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/attachment`,
    timeout: 10000,
    withCredentials: true,
});

[instance, authoritiesInstance, attachmentInstance].forEach(
    (customInstance) =>
        process.env.NODE_ENV === 'development' &&
        (customInstance.defaults.headers.common['Authorization'] = testToken),
);

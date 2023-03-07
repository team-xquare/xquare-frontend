import axios from 'axios';

const testToken = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjE0YjRkYi1mNzIzLTRiNDMtYjRkNS0xYmI2N2VkODAyODkiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc4MTc2NDQxLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiVUtOIiwiU1RVIiwiU1RDIl19.zWSE1dlFgbk45LMFsFn26k2BZC680J3PqWo6gRFTb80`;

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

export const attachmentInstance = axios.create({
    baseURL: 'https://stag-api.xquare.app/attachment',
    timeout: 10000,
    withCredentials: true,
});

[instance, authoritiesInstance, attachmentInstance].map(
    (customInstance) =>
        process.env.NODE_ENV === 'development' &&
        (customInstance.defaults.headers.common['Authorization'] = testToken),
);

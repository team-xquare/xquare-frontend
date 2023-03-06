import axios from 'axios';

const testToken = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjE0YjRkYi1mNzIzLTRiNDMtYjRkNS0xYmI2N2VkODAyODkiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc4MDc4Mzg5LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiVUtOIiwiU1RVIiwiU1RDIl19.xFtJ10WXnVfYQ29qtM1MuRvQiUMyOkNzKilQu6B-rgY`;

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

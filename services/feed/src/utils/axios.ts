import axios from 'axios';

const testToken = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjE0YjRkYi1mNzIzLTRiNDMtYjRkNS0xYmI2N2VkODAyODkiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc5MjQ0NzY3LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiVUtOIiwiU1RVIiwiU1RDIl19.l2n6_1xLe5QJqvtCLPEuxStV-UsNcLd8i9GBXXyHBig`;
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

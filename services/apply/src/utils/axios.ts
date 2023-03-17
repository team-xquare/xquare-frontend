import axios from 'axios';

const testToken =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjE0YjRkYi1mNzIzLTRiNDMtYjRkNS0xYmI2N2VkODAyODkiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc4MTgzMDYwLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiVUtOIiwiU1RVIiwiU1RDIl19.IEj8wnsqPEGFoGrjAKnpG2Ytf_A0Rbcoty2wGOFuAsY';

export const instance = axios.create({
    baseURL: 'https://api.xquare.app/applications',
    timeout: 10000,
    withCredentials: true,
});

process.env.NODE_ENV === 'development' &&
    (instance.defaults.headers.common['Authorization'] = testToken);

export const pickInstance = axios.create({
    baseURL: 'https://api.xquare.app/pick',
    timeout: 10000,
    withCredentials: true,
});

process.env.NODE_ENV === 'development' &&
    (pickInstance.defaults.headers.common['Authorization'] = testToken);

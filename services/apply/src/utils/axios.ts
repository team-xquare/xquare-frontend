import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://stag-api.xquare.app/applications',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzk0YTk1NC0xMzhjLTQ5OTEtOWYwYS00NWFjMzI4MTViNWIiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc3MTIxMjUyLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiU1RVIl19.o0Vq_dpL_92hWQ6yQWjeMWqcGeagBJ9eDGQ0YoBZBwg',
    },
    withCredentials: true,
});

export const pickInstance = axios.create({
    baseURL: 'https://stag-api.xquare.app/pick',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzk0YTk1NC0xMzhjLTQ5OTEtOWYwYS00NWFjMzI4MTViNWIiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc3MTYzOTI1LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiU1RVIl19.OhPCcSRylIJoSAP0ZyYDq896MB2JXJkgkKDdzHc2DeM',
    },
    withCredentials: true,
});

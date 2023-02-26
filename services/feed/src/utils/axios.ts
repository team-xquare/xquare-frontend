import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://stag-api.xquare.app/feeds',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzk0YTk1NC0xMzhjLTQ5OTEtOWYwYS00NWFjMzI4MTViNWIiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc2MDUyNzg2LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiU1RVIl19.iKyJDzYjLuJk4vXnD7ykF2NxRjgqbm_gb_FHznuBzio',
    },
    withCredentials: true,
});

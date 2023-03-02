import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://stag-api.xquare.app/feeds',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzk0YTk1NC0xMzhjLTQ5OTEtOWYwYS00NWFjMzI4MTViNWIiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjc3NjkyODk1LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiU1RVIl19.GDzwNeXc9jiKbjQmsldelR1Z3TGt-lGOTxSFP6fjJFY',
    },
    withCredentials: true,
});

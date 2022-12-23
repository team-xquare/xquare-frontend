import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://stag-api.xquare.app/applications',
    timeout: 10000,
    headers: {
        Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYzY4ZmFkMS00M2ZjLTRmNWUtOTk4OS01ZWZmYTMzYzIzYjAiLCJyb2xlIjoiU1RVIiwiZXhwIjoxNjcxNjEzMTUzLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsic3R1ZGVudCJdfQ.W-GPDNwpgwtPR1ATFr3bDE1ZTf7Bv4s0hzrx2W9xS8E',
    },
    withCredentials: true,
});

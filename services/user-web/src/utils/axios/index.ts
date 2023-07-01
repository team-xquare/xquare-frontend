import axios, { AxiosError } from 'axios';
import { setToken, getToken } from '../functions/TokenManager';

const BASE_URL = process.env.NEXT_PUBLIC_PICK_BASE_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use(
    async function (config) {
        const accessToken = await getToken().accessToken;

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    async (error) => {
        const {
            config,
            response: { status },
        } = error;
        if (status === 401 && error.response.data.message === 'TokenExpiredError') {
            const originalRequest = config;
            const refreshToken = await getToken().refreshToken;

            const { data } = await axios.put(`${BASE_URL}/users/login`, {
                'Refresh-Token': refreshToken,
            });
            const { access_token: newAccessToken, refresh_token: newRefreshToken } = data;

            setToken(newAccessToken, newRefreshToken, new Date(''));
            axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
        }
        return Promise.reject(error);
    },
);

export default instance;

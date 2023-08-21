import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { customCookie } from '../libs/cookie';
import toast from 'react-hot-toast';
import router from 'next/router';
import { UserRefreshToken } from './types';
// const testToken =
//     'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NmZhNTQ1YS00NjA1LTQyMjgtYWE5OS1iZTNjZTBhMGIzMjMiLCJyb2xlIjoiRE9SIiwiZXhwIjoxNjc3ODM3NTY1LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIiwiYXV0aG9yaXRpZXMiOlsiRE9SIl19.Ltfdsw3i9ADqXByA3RceznBySN3A68JRoswUNj67_04';

const xquareBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const pointInstance = axios.create({
    baseURL: `${xquareBaseUrl}/points`,
});

export const feedInstance = axios.create({
    baseURL: `${xquareBaseUrl}/feeds`,
});

export const userInstance = axios.create({
    baseURL: `${xquareBaseUrl}/users`,
});

export const applyInstance = axios.create({
    baseURL: `${xquareBaseUrl}/applications`,
});

export const instanceArr = [pointInstance, feedInstance, userInstance, applyInstance];

// process.env.NODE_ENV === 'development' &&
//     (pointInstance.defaults.headers.common['Authorization'] = testToken);

// process.env.NODE_ENV === 'development' &&
//     (feedInstance.defaults.headers.common['Authorization'] = testToken);

// process.env.NODE_ENV === 'development' &&
//     (userInstance.defaults.headers.common['Authorization'] = testToken);

instanceArr.map((instance) => {
    instance.interceptors.request.use(
        (config) => {
            const accessToken = customCookie.get.access_token();
            accessToken && (config.headers!['Authorization'] = `Bearer ${accessToken}`);
            return config;
        },
        (error) => Promise.reject(error),
    );
    instance.interceptors.response.use(
        async (result) => Promise.resolve(result),
        async (error) => {
            if (axios.isAxiosError(error) && error.response) {
                const { config, response } = error;
                if (response.status === 403) {
                    try {
                        customCookie.remove.access_token();
                        const beforeRefresh = customCookie.get.refresh_token();
                        if (!beforeRefresh) throw error;

                        const response = await axios.put<UserRefreshToken>(
                            `${xquareBaseUrl}/users/login`,
                            {},
                            {
                                headers: {
                                    'Refresh-Token': `Bearer ${beforeRefresh}`,
                                },
                            },
                        );

                        const { access_token, refresh_token, expire_at } = response.data;
                        customCookie.set.token(access_token, refresh_token, expire_at);
                        if (config.headers) config.headers.Authorization = `Bearer ${access_token}`;

                        return axios(config);
                    } catch (e) {
                        if (
                            error.response.data.status === 403 ||
                            error.response.data.status === 404
                        ) {
                            toast.error('다시 로그인해주세요.');
                            router.push('/');
                            customCookie.remove.access_token();
                            customCookie.remove.refresh_token();
                        } else {
                            toast.error('관리자에게 문의해주세요.');
                        }
                    }
                } else return Promise.reject(error);
            } else return Promise.reject(error);
        },
    );
});
// instance.interceptors.request.use(
//     (config) => {
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );

// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );

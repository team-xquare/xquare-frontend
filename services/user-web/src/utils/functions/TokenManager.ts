import axios from 'axios';
import cookies from 'react-cookies';
import { toast } from 'react-hot-toast';

export const setToken = (accessToken: string, refreshToken: string, expire_at: Date) => {
    const expires = new Date(expire_at);

    cookies.save('accessToken', accessToken, {
        path: '/',
        expires: expires,
        httpOnly: process.env.NEXT_PUBLIC_HTTP_ONLY === 'true',
    });

    cookies.save('refreshToken', refreshToken, {
        path: '/',
        expires: expires,
        httpOnly: process.env.NEXT_PUBLIC_HTTP_ONLY === 'true',
    });
};

export const removeToken = () => {
    cookies.remove('accessToken');
    cookies.remove('refreshToken');
};

export const getToken = () => {
    const { accessToken, refreshToken } = cookies.select();
    return { accessToken, refreshToken };
};

interface RefreshToken {
    access_token: string;
    refresh_token: string;
    expire_at: Date;
}

export const refreshToken = async () => {
    const { refreshToken } = getToken();

    if (!refreshToken) {
        return;
    }

    try {
        const response = await axios.put<RefreshToken>('/users/login', {
            refreshToken: refreshToken,
        });

        const { access_token, refresh_token, expire_at } = response.data;

        setToken(access_token, refresh_token, expire_at);
    } catch (error) {
        toast.error('토큰 리프레쉬에 실패하였습니다.');
    }
};

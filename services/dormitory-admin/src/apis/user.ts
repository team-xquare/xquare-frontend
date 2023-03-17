import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { UserLogin, UserToken } from './types';
import toast from 'react-hot-toast';
import { customCookie } from '../libs/cookie';
import axios from 'axios';
export const useLoginMutation = () => {
    const router = useRouter();
    return useMutation(
        async (param: UserLogin) =>
            axios.post<UserToken>('https://api.xquare.app/users/login', {
                ...param,
                device_token: 'qwefsdfejk',
            }),
        {
            onError: () => {
                toast.error('로그인에 실패하였습니다.');
            },
            onSuccess: (res) => {
                const { access_token, refresh_token, expire_at } = res.data;
                toast.success('로그인에 성공하였습니다.');
                customCookie.set.token(access_token, refresh_token, expire_at);
                router.push('/point');
            },
        },
    );
};

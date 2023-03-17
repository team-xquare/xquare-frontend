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
            axios.post<UserToken>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
                ...param,
                device_token: 'qwefsdfejk',
            }),
        {
            onError: () => {
                toast.error('로그인에 실패하였습니다.');
            },
            onSuccess: (res) => {
                const { access_token, refresh_token, expire_at, role } = res.data;
                if (role !== 'DOR') {
                    toast.error('권한이 없습니다.\n권한이 있는 아이디로 로그인해주세요.');
                } else {
                    toast.success('로그인에 성공하였습니다.');
                    customCookie.set.token(access_token, refresh_token, expire_at);
                    router.push('/point');
                }
            },
        },
    );
};

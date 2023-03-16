import React, { useState, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { Button } from '@semicolondsm/ui';
import Input from '../components/input';
import { postSignup } from '../apis/signup';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
interface OnLonginExProps {
    verification_code: string;
    account_id: string;
    profile_file_name: string;
    password: string;
    repassword: string;
}

const signup = () => {
    const [userInfo, setUserInfo] = useState<OnLonginExProps>({
        verification_code: '',
        account_id: '',
        profile_file_name: '',
        password: '',
        repassword: '',
    });
    const router = useRouter();
    const { repassword, ...signupData } = userInfo;
    const { mutate: signupMutate } = useMutation(postSignup, {
        onMutate: () => {
            router.push('/loading');
        },
        onError: () => {
            router.push('/error');
        },
        onSuccess: () => {
            router.push('/complete');
        },
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    return (
        <Template>
            <Title>회원가입</Title>
            <Input
                name="verification_code"
                value={userInfo.verification_code}
                onChange={onChange}
                label="인증코드"
                placeholder="6자리를 입력해주세요"
            />
            <Input
                name="account_id"
                value={userInfo.account_id}
                onChange={onChange}
                label="아이디"
                placeholder="영문, 숫자 6~20자"
            />
            <Input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={onChange}
                label="비밀번호"
                placeholder="숫자, 영문, 특수문자 조합 최소 6자"
            />
            <Input
                type="password"
                name="repassword"
                value={userInfo.repassword}
                onChange={onChange}
                label="비밀번호 재입력"
                placeholder="재입력"
                borderColor={userInfo.password === userInfo.repassword ? 'gray300' : 'red300'}
            />
            <CustomButton
                fill="purple"
                fullWidth
                disabled={
                    !(
                        userInfo.account_id &&
                        userInfo.password &&
                        userInfo.verification_code &&
                        userInfo.password === userInfo.repassword
                    )
                }
                onClick={() => signupMutate(signupData)}>
                입력완료
            </CustomButton>
        </Template>
    );
};

const Template = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 16px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 50px;

    padding: 12px 0px 10px 0px;

    color: ${({ theme }) => theme.colors.gray900};
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
`;

const CustomButton = styled(Button)`
    margin-top: 128px;
    border-radius: 12px;
`;

export default signup;

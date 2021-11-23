import { FC, useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import React from '@emotion/react';
import styled from '@emotion/styled';
import { MagnifierIco } from '../../../static/svg';

interface Props {}
const SearchInput: FC<Props> = () => {
    const [name, setName] = useState<string>('');
    const router = useRouter();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = name.length > 0 ? `/search?name=${name}` : '/';
        router.push(url);
    };
    return (
        <SearchBlock onSubmit={onSubmit}>
            <LeftBlock>
                <MagnifierIco />
            </LeftBlock>
            <Input onChange={(e) => setName(e.target.value)} name="name" placeholder="Search" />
        </SearchBlock>
    );
};

export default SearchInput;

const SearchBlock = styled.form`
    box-sizing: border-box;
    min-width: 264px;
    width: 100%;
    padding: 0 12px;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.gray800};
    }
`;

const LeftBlock = styled.div`
    margin-right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.gray400};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
        color: ${({ theme }) => theme.colors.gray400};
    }
`;

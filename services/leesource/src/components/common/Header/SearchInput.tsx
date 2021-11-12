import { FC } from 'react';
import React from '@emotion/react';
import { Title1 } from '@semicolondsm/ui';
import styled from '@emotion/styled';
import { MagnifierIco } from '../../../static/svg';

interface Props {}
const SearchInput: FC<Props> = () => {
    return (
        <SearchBlock>
            <LeftBlock>
                <MagnifierIco />
            </LeftBlock>
            <Input placeholder="Search" />
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

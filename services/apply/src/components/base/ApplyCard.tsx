import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Botton } from '@semicolondsm/ui';
import { SetStateAction, Dispatch } from 'react';
import { useState } from 'react';
interface Props {
    onSelect?: boolean;
    setSelect?: Dispatch<SetStateAction<boolean>>;
}

const ApplyCard = () => {
    const [isSelect, setIsSelect] = useState<boolean>(false);
    return (
        <Wrapper onClick={() => setIsSelect((state) => !state)} isSelect={isSelect}>
            <StudyTextInfoBox isSelect={isSelect}>
                <Botton>나온실</Botton>
                <Botton>0/20</Botton>
            </StudyTextInfoBox>

            <ImageWrapper>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
                <ImageBox></ImageBox>
            </ImageWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div<{ isSelect: boolean }>`
    width: 100%;
    background-color: ${({ isSelect, theme }) =>
        isSelect ? theme.colors.purple500 : theme.colors.gray50};
    margin-bottom: 8px;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    max-height: ${({ isSelect }) => (isSelect ? '134px' : '56px')};
    justify-content: space-between;
    transition: all 0.3s;
`;

const StudyTextInfoBox = styled.div<{ isSelect: boolean }>`
    width: 100%;
    display: flex;
    justify-content: space-between;

    > div {
        transition: all 0.5s;
        color: ${({ theme, isSelect }) => (isSelect ? theme.colors.white : theme.colors.gray900)};
    }
`;

const ImageWrapper = styled.section`
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ImageBox = styled.div`
    height: 64px;
    width: 40px;
    background-color: black;
    margin-top: 10px;
    margin-right: 10px;
    flex-shrink: 0;
`;

export default ApplyCard;

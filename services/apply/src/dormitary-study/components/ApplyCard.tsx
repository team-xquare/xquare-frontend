import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Botton } from '@semicolondsm/ui';
import { SetStateAction, Dispatch } from 'react';
import { useState } from 'react';
import StudentProfile from './StudentProfile';
import { StudyRoom } from '../types';

interface Props extends StudyRoom {
    isSelect: boolean;
    setIsSelect: Dispatch<SetStateAction<string>>;
}

const ApplyCard = (props: Props) => {
    return (
        <Wrapper
            onClick={() => props.setIsSelect((state) => (state === props.id ? '' : props.id))}
            isSelect={props.isSelect}>
            <StudyTextInfoBox isSelect={props.isSelect}>
                <Botton>{props.study_room_name}</Botton>
                <Botton>
                    {props.application_count}/{props.max_people_count}
                </Botton>
            </StudyTextInfoBox>

            <ImageWrapper>
                {props.students?.map((i, idx) => (
                    <StudentProfile {...i} key={idx} />
                ))}
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
    gap: 20px;
    overflow: hidden;
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
    min-height: 60px;
    flex: 1;
    gap: 12px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default ApplyCard;

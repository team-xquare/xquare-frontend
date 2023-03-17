import styled from '@emotion/styled';
import { Botton } from '@semicolondsm/ui';
import { SetStateAction, Dispatch } from 'react';
import StudentProfile from './StudentProfile';
import { StudyRoom } from '../types';

interface Props extends StudyRoom {
    isSelect: boolean;
    isFull: boolean;
    setIsSelect: Dispatch<SetStateAction<string>>;
}

const ApplyCard = (props: Props) => {
    return (
        <Wrapper
            onClick={() => props.setIsSelect((state) => (state === props.id ? '' : props.id))}
            isSelect={props.isSelect}
            isFull={props.isFull}>
            <StudyTextInfoBox isSelect={props.isSelect} isFull={props.isFull}>
                <Botton>{props.study_room_name}</Botton>
                <Botton className="count">
                    {props.application_count}/{props.max_people_count}
                </Botton>
            </StudyTextInfoBox>

            <ImageWrapper>
                {props.isSelect &&
                    props.students?.map((i, idx) => (
                        <StudentProfile isFull={props.isFull} {...i} key={idx} />
                    ))}
            </ImageWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div<{ isSelect: boolean; isFull: boolean }>`
    width: 100%;
    background-color: ${({ isSelect, isFull, theme }) =>
        isSelect ? (isFull ? theme.colors.gray200 : theme.colors.purple500) : theme.colors.gray50};
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

const StudyTextInfoBox = styled.div<{ isSelect: boolean; isFull: boolean }>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div {
        transition: all 0.5s;
        color: ${({ theme, isSelect, isFull }) =>
            isSelect ? (isFull ? theme.colors.gray900 : theme.colors.white) : theme.colors.gray900};
    }
    .count {
        color: ${({ theme, isFull }) => isFull && theme.colors.red400};
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

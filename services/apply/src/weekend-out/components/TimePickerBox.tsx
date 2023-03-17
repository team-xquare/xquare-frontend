import styled from '@emotion/styled';
import { FlexRow } from '../../common/components/Flexbox';
import { useBridgeHandler } from '@shared/xbridge';
interface TimePickerBoxProps {
    startTime: string;
    endTime: string;
    setTime: (props: { type: 'startTime' | 'endTime'; value: string }) => void;
}

const TimePickerBox = ({ setTime, endTime, startTime }: TimePickerBoxProps) => {
    const onSelectStartTime = useBridgeHandler(
        'timePicker',
        (e) => {
            setTime({ type: 'startTime', value: e.detail.time });
        },
        { time: startTime },
    );
    const onSelectEndTime = useBridgeHandler(
        'timePicker',
        (e) => {
            setTime({ type: 'endTime', value: e.detail.time });
        },
        { time: endTime },
    );

    return (
        <TimeContainer>
            <TimeInput value={startTime} onClick={onSelectStartTime}>
                {startTime || '출발시간'}
            </TimeInput>
            <FlexRow justify="center">~</FlexRow>
            <TimeInput value={endTime} onClick={onSelectEndTime}>
                {endTime || '도착시간'}
            </TimeInput>
        </TimeContainer>
    );
};

const TimeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 32px 1fr;
    width: 100%;
`;

const TimeInput = styled.div<{ value?: string }>`
    height: 44px;
    border-radius: 8px;
    border: 1px solid
        ${({ theme, value }) => (!value ? theme.colors.gray300 : theme.colors.gray800)};
    color: ${({ theme, value }) => (!value ? theme.colors.gray300 : theme.colors.gray800)};
    background-color: ${({ theme, value }) => (!value ? theme.colors.gray50 : theme.colors.white)};
    padding: 10px 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;

export default TimePickerBox;

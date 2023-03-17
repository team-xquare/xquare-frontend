import styled from '@emotion/styled';
import { FlexRow } from '../../common/components/Flexbox';
import { useBridgeHandler } from '@shared/xbridge';
interface PeriodPickerBoxProps {
    startPeriod: number | undefined;
    endPeriod: number | undefined;
    setPeriod: (props: { type: 'startPeriod' | 'endPeriod'; value: number }) => void;
}

const PeriodPickerBox = ({ setPeriod, endPeriod, startPeriod }: PeriodPickerBoxProps) => {
    const onSelectStartPeriod = useBridgeHandler(
        'periodPicker',
        (e) => {
            setPeriod({ type: 'startPeriod', value: e.detail.period });
        },
        { period: startPeriod },
    );
    const onSelectEndPeriod = useBridgeHandler(
        'periodPicker',
        (e) => {
            setPeriod({ type: 'endPeriod', value: e.detail.period });
        },
        { period: endPeriod },
    );

    return (
        <PeriodContainer>
            <PeriodInput value={String(startPeriod)} onClick={onSelectStartPeriod}>
                {startPeriod ? `${startPeriod}교시` : '출발교시'}
            </PeriodInput>
            <FlexRow justify="center">~</FlexRow>
            <PeriodInput value={String(endPeriod)} onClick={onSelectEndPeriod}>
                {endPeriod ? `${endPeriod}교시` : '도착교시'}
            </PeriodInput>
        </PeriodContainer>
    );
};

const PeriodContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 32px 1fr;
    width: 100%;
`;

const PeriodInput = styled.div<{ value?: string }>`
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

export default PeriodPickerBox;

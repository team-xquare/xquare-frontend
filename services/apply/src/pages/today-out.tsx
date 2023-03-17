import { useEffect, useState } from 'react';
import { FlexCol } from '../common/components/Flexbox';
import MainPageTemplate from '../common/components/templates/MainPageTemplate';
import LabelBox from '../today-out/components/LabelBox';
import Textarea from '../today-out/components/Textarea';
import TimePickerBox from '../weekend-out/components/TimePickerBox';
import { useBridgeCallback, sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import useTodayOutApply from '../today-out/hooks/useTodayOutApply';
import PeriodPickerBox from '../today-out/components/PeriodPickerBox';
import useTimeTable from '../common/hooks/useTimeTable';
const TodayOut = () => {
    const currentPeriod = useTimeTable();
    const [periodState, setTimeState] = useState<
        Record<'startPeriod' | 'endPeriod', number | undefined>
    >({
        startPeriod: currentPeriod,
        endPeriod: currentPeriod,
    });
    const [reason, setReason] = useState('');
    const { mutate: todayOutMutate } = useTodayOutApply();
    useEffect(() => {
        sendBridgeEvent('isRightButtonEnabled', {
            isEnabled: !!(periodState.endPeriod && periodState.startPeriod && reason),
        });
    }, [!!(periodState.endPeriod && periodState.startPeriod && reason)]);

    const todayOutConfirmEvent = useBridgeHandler(
        'confirm',
        (e) => {
            e.detail.success &&
                todayOutMutate({
                    desired_end_period: periodState.startPeriod!,
                    desired_start_period: periodState.endPeriod!,
                    reason: reason,
                });
        },
        { cancelText: '취소하기', confirmText: '신청하기', message: '외출을 신청하시겠습니까?' },
    );

    useBridgeCallback('rightButtonTaped', todayOutConfirmEvent, undefined);

    return (
        <MainPageTemplate>
            <FlexCol gap={24} fullWidth>
                <LabelBox label="희망 외출 교시를 선택해주세요.">
                    <PeriodPickerBox
                        setPeriod={(props) =>
                            setTimeState((state) => ({ ...state, [props.type]: props.value }))
                        }
                        startPeriod={periodState.startPeriod}
                        endPeriod={periodState.endPeriod}
                    />
                </LabelBox>
                <LabelBox label="외출 사유를 적어주세요.">
                    <Textarea
                        placeholder="내용을 입력해주세요"
                        minRows={4}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </LabelBox>
            </FlexCol>
        </MainPageTemplate>
    );
};

export default TodayOut;

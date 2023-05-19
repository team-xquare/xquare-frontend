import { ChangeEvent, useEffect, useState } from 'react';
import ButtomFixedButton from '../common/components/ButtomFixedButton';
import { FlexCol } from '../common/components/Flexbox';
import MainPageTemplate from '../common/components/templates/MainPageTemplate';
import LabelBox from '../today-out/components/LabelBox';
import Textarea from '../today-out/components/Textarea';
import TimePickerBox from '../weekend-out/components/TimePickerBox';
import useGetWeekendOut, { prefetchWeekendOut } from '../weekend-out/hooks/useGetWeekendOut';
import { sendBridgeEvent } from '@shared/xbridge';
import { Botton } from '@semicolondsm/ui';
import useWeekOutTime, { prefetchWeekOutTime } from '../weekend-out/hooks/useWeekOutTime';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import useIsApplyTime from '../weekend-out/hooks/useIsApplyTime';
import { weeksMap } from '../constant/time';
import useWeekendOutConfirm from '../weekend-out/hooks/useWeekendOutConfirm';
import FormatTime from '../utils/function/FormatTime';
import useIsInvalidTime from '../weekend-out/hooks/useIsInvalidTime';

const WeekendOut = () => {
    const { data: weekendOutData } = useGetWeekendOut();

    const [timeState, setTimeState] = useState({
        startTime: '',
        endTime: '',
    });

    const { data: outTime } = useWeekOutTime();
    const isApplyTime = useIsApplyTime(timeState.startTime, timeState.endTime);
    const isInvalidTime = useIsInvalidTime(timeState.startTime, timeState.endTime);

    const [inputState, setInputState] = useState({
        arrangement: '',
        reason: '',
    });

    useEffect(
        () =>
            weekendOutData &&
            (setTimeState({
                startTime: FormatTime(weekendOutData.start_time),
                endTime: FormatTime(weekendOutData.end_time),
            }),
            setInputState({
                arrangement: weekendOutData.arrangement,
                reason: weekendOutData.reason,
            })),
        [weekendOutData],
    );

    const ChangeWeekendOutConfirm = useWeekendOutConfirm(timeState, inputState);

    const onClickApplyButton = () => {
        if (isApplyTime && isInvalidTime) {
            ChangeWeekendOutConfirm();
        } else if (!isApplyTime) {
            sendBridgeEvent('error', { message: '외출가능시간 안에만 외출이 가능합니다.' });
        } else {
            sendBridgeEvent('error', { message: '시간을 잘못 입력하였습니다.' });
        }
    };

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputState((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    return (
        <MainPageTemplate>
            <FlexCol gap={24}>
                <LabelBox label="외출 가능 시간" required={false}>
                    {outTime && (
                        <Botton color="gray700">{`${weeksMap[outTime?.day_type]}요일: ${FormatTime(
                            outTime.picnic_allow_start_time,
                        )} ~ ${FormatTime(outTime.picnic_allow_end_time)}`}</Botton>
                    )}
                </LabelBox>
                <LabelBox label="외출 시간을 적어주세요.">
                    <TimePickerBox
                        setTime={(props) =>
                            setTimeState((state) => ({ ...state, [props.type]: props.value }))
                        }
                        startTime={timeState.startTime}
                        endTime={timeState.endTime}
                    />
                </LabelBox>
                <LabelBox label="외출 사유를 적어주세요.">
                    <Textarea
                        placeholder="내용을 입력해주세요"
                        minRows={4}
                        onChange={onChangeTextarea}
                        name="reason"
                        value={inputState.reason}
                    />
                </LabelBox>
                <LabelBox label="동행자의 학번, 이름을 적어주세요." required={false}>
                    <Textarea
                        placeholder="내용을 입력해주세요"
                        minRows={4}
                        onChange={onChangeTextarea}
                        name="arrangement"
                        value={inputState.arrangement}
                    />
                </LabelBox>
            </FlexCol>
            <ButtomFixedButton
                onClick={onClickApplyButton}
                disabled={!(timeState.endTime && timeState.startTime && inputState.reason)}>
                {weekendOutData ? '수정하기' : '신청하기'}
            </ButtomFixedButton>
        </MainPageTemplate>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    await Promise.all([prefetchWeekOutTime(queryClient), prefetchWeekendOut(queryClient)]);

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
};

export default WeekendOut;

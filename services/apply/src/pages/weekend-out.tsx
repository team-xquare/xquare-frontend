import { ChangeEvent, useState } from 'react';
import ButtomFixedButton from '../common/components/ButtomFixedButton';
import { FlexCol } from '../common/components/Flexbox';
import MainPageTemplate from '../common/components/templates/MainPageTemplate';
import LabelBox from '../today-out/components/LabelBox';
import Textarea from '../today-out/components/Textarea';
import TimePickerBox from '../today-out/components/TimePickerBox';
import useWeekendOut from '../weekend-out/hooks/useWeekendOut';

const WeekendOut = () => {
    const [timeState, setTimeState] = useState({
        startTime: '',
        endTime: '',
    });
    const { mutate: weekendOutMutate } = useWeekendOut();
    const [inputState, setInputState] = useState({
        arrangement: '',
        reason: '',
    });

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInputState((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    return (
        <MainPageTemplate>
            <FlexCol gap={24}>
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
                <LabelBox label="동행자의 학번, 이름을 적어주세요.">
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
                onClick={() =>
                    weekendOutMutate({
                        end_time: timeState.endTime,
                        start_time: timeState.startTime,
                        arrangement: inputState.arrangement || ' ',
                        reason: inputState.reason,
                    })
                }
                disabled={!(timeState.endTime && timeState.startTime && inputState.reason)}>
                신청하기
            </ButtomFixedButton>
        </MainPageTemplate>
    );
};

export default WeekendOut;

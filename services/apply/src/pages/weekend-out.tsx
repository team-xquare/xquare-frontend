import { useState } from 'react';
import { FlexCol } from '../common/components/Flexbox';
import MainPageTemplate from '../common/components/templates/MainPageTemplate';
import LabelBox from '../today-out/components/LabelBox';
import Textarea from '../today-out/components/Textarea';
import TimePickerBox from '../today-out/components/TimePickerBox';

const WeekendOut = () => {
    const [timeState, setTimeState] = useState({
        startTime: '',
        endTime: '',
    });

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
                    <Textarea placeholder="내용을 입력해주세요" minRows={4}></Textarea>
                </LabelBox>
                <LabelBox label="동행자의 학번, 이름을 적어주세요.">
                    <Textarea placeholder="내용을 입력해주세요" minRows={4}></Textarea>
                </LabelBox>
            </FlexCol>
        </MainPageTemplate>
    );
};

export default WeekendOut;

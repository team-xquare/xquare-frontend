import styled from '@emotion/styled';
import { Body1, Title1, Title2, Title3 } from '@semicolondsm/ui';
import { usePicnicDetail } from '../../apis/apply';
import { SelectedPicnicType } from '../../apis/types';
import { Flex } from '../common/Flex';
import ScrollBox from '../common/ScrollBox';

interface PicnicDetailProps {
    selectedPicnicId: SelectedPicnicType;
}

const PicnicDetail = ({ selectedPicnicId }: PicnicDetailProps) => {
    const trueStudentIds = Object.keys(selectedPicnicId).filter(
        (key) => selectedPicnicId[key] && key,
    );
    const { data: picnicDetail } = usePicnicDetail(trueStudentIds);
    console.log(picnicDetail);

    return (
        <ScrollBox>
            {!!trueStudentIds.length ? (
                trueStudentIds.length === 1 ? (
                    <PicnicDetailContainer>
                        <Flex direction="column" gap={24}>
                            <Title3>
                                {picnicDetail?.name}({picnicDetail?.num})
                            </Title3>
                            <LabelContainer direction="column" gap={4}>
                                <h3>외출 시간</h3>
                                <p>
                                    {picnicDetail?.start_time} ~ {picnicDetail?.end_time}
                                </p>
                            </LabelContainer>
                            <LabelContainer direction="column" gap={4}>
                                <h3>이유</h3>
                                <p>{picnicDetail?.reason}</p>
                            </LabelContainer>
                            <LabelContainer direction="column" gap={4}>
                                <h3>동행인</h3>
                                <p>{picnicDetail?.arrangement}</p>
                            </LabelContainer>
                        </Flex>
                    </PicnicDetailContainer>
                ) : (
                    <Flex direction="column" fullHeight justify="center" align="center">
                        <Body1>학생을 한명만 선택해주세요.</Body1>
                    </Flex>
                )
            ) : (
                <Flex direction="column" fullHeight justify="center" align="center">
                    <Body1>학생을 선택해주세요.</Body1>
                </Flex>
            )}
        </ScrollBox>
    );
};

const PicnicDetailContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 24px;
`;

const LabelContainer = styled(Flex)`
    > h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 0;
    }
    > p {
        font-size: 16px;
        margin: 0;
        font-weight: 400;
    }
`;

export default PicnicDetail;

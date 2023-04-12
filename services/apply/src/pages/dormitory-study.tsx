import type { GetServerSideProps, NextPage } from 'next';
import styled from '@emotion/styled';
import ApplyCard from '../dormitary-study/components/ApplyCard';
import { useMemo, useState } from 'react';
import MainPageTemplate from '../common/components/templates/MainPageTemplate';
import ButtomFixedButton from '../common/components/ButtomFixedButton';
import { QueryClient, dehydrate } from 'react-query';
import useStudyRoom, { prefetchStudyRoom } from '../dormitary-study/hooks/useStudyRoom';
import useMyStudyRoom, { prefetchMyStudyRoom } from '../dormitary-study/hooks/useMyStudyRoom';
import useSetStudyRoom from '../dormitary-study/hooks/useSetStudyRoom';
import uesCancelStudyRoom from '../dormitary-study/hooks/useCancelStudyRoom';

const DormitoryStudy: NextPage = () => {
    const { data: studyRoom } = useStudyRoom();
    const { data: myStudyRoom } = useMyStudyRoom();
    const { mutate: setStudyRoom } = useSetStudyRoom();
    const { mutate: cancelStudyRoom } = uesCancelStudyRoom();
    const [selectCard, setSelectCard] = useState<string>(myStudyRoom?.study_room_id || '');

    const isDisableButton = useMemo(() => {
        const disableCard = studyRoom?.study_rooms.find((i) => i.id === selectCard);
        return !selectCard || disableCard?.max_people_count === disableCard?.application_count;
    }, [selectCard, studyRoom]);

    return (
        <MainPageTemplate subTitle="공부할 자습실을 선택해 주세요.">
            <ApplyCardList>
                {studyRoom?.study_rooms.map((i, idx) => (
                    <ApplyCard
                        isSelect={selectCard === i.id}
                        isFull={i.application_count === i.max_people_count}
                        key={idx}
                        setIsSelect={setSelectCard}
                        {...i}
                    />
                ))}
            </ApplyCardList>
            <ButtomFixedButton
                disabled={isDisableButton}
                onClick={() => {
                    selectCard === myStudyRoom?.study_room_id
                        ? cancelStudyRoom({ study_room_id: selectCard })
                        : setStudyRoom({ study_room_id: selectCard });
                }}>
                {myStudyRoom?.study_room_id === selectCard ? '취소하기' : '신청하기'}
            </ButtomFixedButton>
        </MainPageTemplate>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    await Promise.all([prefetchMyStudyRoom(queryClient), prefetchStudyRoom(queryClient)]);

    return {
        props: { dehydratedState: dehydrate(queryClient) },
    };
};

const ApplyCardList = styled.section`
    flex-direction: column;
    flex: 1;
    overflow: auto;
    overflow-y: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default DormitoryStudy;

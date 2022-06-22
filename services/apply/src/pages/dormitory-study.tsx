import type { GetServerSideProps, NextPage } from 'next';
import styled from '@emotion/styled';
import ApplyCard from '../dormitary-study/components/ApplyCard';
import { useState } from 'react';
import MainPageTemplate from '../common/templates/MainPageTemplate';
import ButtomFixedButton from '../common/ButtomFixedButton';
import { QueryClient, dehydrate, useQuery, useMutation, useQueryClient } from 'react-query';
import { getStudyRoom, postStudyRoom } from '../dormitary-study/apis';
import { queryKeys } from '../utils/queryKeys';

const DormitoryStudy: NextPage = () => {
    const key = queryKeys.getStudyRoomList();
    const queryClient = useQueryClient();
    const { data } = useQuery(key, getStudyRoom, {
        retry: 0,
    });
    const { mutate } = useMutation(postStudyRoom, {
        onSuccess: () => queryClient.invalidateQueries(key),
    });

    const [selectCard, setSelectCard] = useState<string>('');
    return (
        <MainPageTemplate subTitle="연장학습을 하고싶은 자습실을 선택해 주세요.">
            <ApplyCardList>
                {data?.study_rooms.map((i, idx) => (
                    <ApplyCard
                        isSelect={selectCard === i.id}
                        key={idx}
                        setIsSelect={setSelectCard}
                        {...i}
                    />
                ))}
            </ApplyCardList>
            <ButtomFixedButton
                disabled={!selectCard}
                onClick={() => mutate({ study_room_id: selectCard })}
            />
        </MainPageTemplate>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    const studyRoomKey = queryKeys.getStudyRoomList();
    await queryClient.prefetchQuery(studyRoomKey, getStudyRoom);

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

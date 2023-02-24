import Radio from '../class-move/components/Radio';
import { Button } from '@semicolondsm/ui';
import { useState } from 'react';
import styled from '@emotion/styled';
import MainPageTemplate from '../common/templates/MainPageTemplate';
import TagButton from '../class-move/components/TagButton';
import useClassroom, { prefetchClassroom } from '../class-move/hooks/useClassroom';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { floorList, floorNumberSelector, FloorType } from '../constant/classMove';

const ClassMove = () => {
    const [stageValue, setStageValue] = useState<FloorType>(floorList[0]);
    const [value, setValue] = useState('');
    const { data } = useClassroom({ floor: floorNumberSelector[stageValue], type: 'SELF_STUDY' });

    return (
        <MainPageTemplate>
            <RadioWrapper>
                <Radio
                    items={floorList}
                    flex="row"
                    ShowComponent={({ children }) => (
                        <TagButton
                            onClick={() => setStageValue(children)}
                            color={stageValue === children ? 'purple' : 'default'}>
                            {children}
                        </TagButton>
                    )}
                />
            </RadioWrapper>
            <Radio
                items={data?.classroom_list.map((i) => i.name) || []}
                flex="grid"
                ShowComponent={({ children }) => (
                    <CustomButton
                        size="sm"
                        onClick={() => setValue(children)}
                        fill={value === children ? 'purple' : 'default'}>
                        {children}
                    </CustomButton>
                )}
            />
        </MainPageTemplate>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    await Promise.all([prefetchClassroom(queryClient, { floor: '1', type: 'SELF_STUDY' })]);
    return {
        props: {
            dehydrateState: dehydrate(queryClient),
        },
    };
};

const CustomButton = styled(Button)`
    justify-content: center;
    border-radius: 8px;
`;

const RadioWrapper = styled.div`
    padding-bottom: 16px;
    width: 100%;
`;

export default ClassMove;

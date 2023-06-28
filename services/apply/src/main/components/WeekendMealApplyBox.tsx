import styled from '@emotion/styled';
import { Botton, Button } from '@semicolondsm/ui';
import { sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import useWeekendMeal from '../hooks/useWeekendMeal';
import useSetWeekendMeal from '../hooks/useSetWeekendMeal';
import { FlexRow } from '../../common/components/Flexbox';

const WeekendMealApplyBox = () => {
    const { data: weekendMealStatus } = useWeekendMeal();
    const { mutate, isLoading } = useSetWeekendMeal();

    const sendApplyConfirm = useBridgeHandler(
        'confirm',
        ({ detail }) => {
            detail.success && mutate({ status: 'APPLY' });
        },
        {
            message: '주말 급식을 신청하겠습니까?',
            confirmText: '신청하기',
            cancelText: '다음에 하기',
        },
        ({ data }) => {
            const isSuccess = confirm(data.message);
            isSuccess && mutate({ status: 'APPLY' });
        },
    );

    const sendNotApplyConfirm = useBridgeHandler(
        'confirm',
        ({ detail }) => {
            detail.success && mutate({ status: 'NOT_APPLY' });
        },
        {
            message: '주말 급식 신청을 취소하겠습니까',
            confirmText: '취소하기',
            cancelText: '다음에 하기',
        },
        ({ data }) => {
            const isSuccess = confirm(data.message);
            isSuccess && mutate({ status: 'NOT_APPLY' });
        },
    );

    return (
        <MealApplyWrapper>
            <Botton>
                {weekendMealStatus ? weekendMealStatus?.title : '지금은 신청기간이 아닙니다'}
            </Botton>
            <FlexRow gap={10}>
                <MealApplyButton
                    loading={isLoading}
                    size="sm"
                    fill={weekendMealStatus?.status === 'APPLY' ? 'purple' : 'border'}
                    onClick={sendApplyConfirm}
                    //disabled={!weekendMealStatus}
                >
                    신청
                </MealApplyButton>
                <MealApplyButton
                    loading={isLoading}
                    size="sm"
                    fill={weekendMealStatus?.status === 'NOT_APPLY' ? 'purple' : 'border'}
                    onClick={sendNotApplyConfirm}
                    //disabled={!weekendMealStatus}
                >
                    미신청
                </MealApplyButton>
            </FlexRow>
        </MealApplyWrapper>
    );
};

const MealApplyButton = styled(Button)`
    border-radius: 8px;
`;

const MealApplyWrapper = styled.div`
    width: 100%;
    height: 56px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    border-radius: 12px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray50};
`;

export default WeekendMealApplyBox;

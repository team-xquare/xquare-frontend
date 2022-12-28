import styled from '@emotion/styled';
import { Botton, Button } from '@semicolondsm/ui';
import { sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import useWeekendMeal from '../hooks/useWeekendMeal';
import useSetWeekendMeal from '../hooks/useSetWeekendMeal';

const WeekendMealApplyBox = () => {
    const { data: weekendMealStatus } = useWeekendMeal();
    const { mutate, isLoading } = useSetWeekendMeal();

    const sendApplyConfirm = useBridgeHandler(
        'confirm',
        ({ detail }) => {
            detail.success && mutate({ apply: true });
        },
        {
            message: '주말급식은 신청해야\n먹을 수 있어요',
            confirmText: '신청하기',
            cancelText: '다음에 하기',
        },
        ({ data }) => {
            return confirm(data.message);
        },
    );

    const sendCancelConfirm = useBridgeHandler(
        'confirm',
        ({ detail }) => {
            detail.success && mutate({ apply: false });
        },
        {
            message: '주말급식 신청을 취소하면\n먹을 수 없어요',
            confirmText: '취소하기',
            cancelText: '다음에 하기',
        },
        ({ data }) => {
            return confirm(data.message);
        },
    );

    return (
        <MealApplyWrapper>
            <Botton>{weekendMealStatus?.title}</Botton>
            <MealApplyButton
                loading={isLoading}
                size="sm"
                fill={weekendMealStatus?.applied ? 'border' : 'purple'}
                onClick={weekendMealStatus?.applied ? sendApplyConfirm() : sendCancelConfirm()}>
                {weekendMealStatus?.applied ? '취소하기' : '신청하기'}
            </MealApplyButton>
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

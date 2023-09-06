import useDeleteFeed from '../../main/hooks/useDeleteFeed';
import { useBridgeHandler, sendBridgeEvent } from '@shared/xbridge';

const useKebaButton = (navUrl: string, feedId: string, categoryId: string) => {
    const actionSheetMenu = ['삭제하기', '신고하기'] as const;
    const { mutate: deleteMutate } = useDeleteFeed(feedId, categoryId);

    const deleteConfirm = useBridgeHandler('confirm', (e) => e.detail.success && deleteMutate(), {
        message: '피드를 삭제하시겠습니까?',
        cancelText: '취소하기',
        confirmText: '삭제하기',
    });

    const menuAction: Record<(typeof actionSheetMenu)[number], () => void> = {
        삭제하기: () => {
            deleteConfirm();
        },
        신고하기: () => {
            sendBridgeEvent('navigate', {
                url: navUrl,
                title: '신고하기',
                rightButtonText: '제출',
            });
        },
    };
    return { actionSheetMenu, menuAction };
};

export default useKebaButton;

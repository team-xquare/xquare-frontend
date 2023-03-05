import { useMutation } from '@tanstack/react-query';
import { postAddFeed } from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
import { AxiosError } from 'axios';
const useAddFeed = () => {
    return useMutation(postAddFeed, {
        onMutate: (e) => {
            sendBridgeEvent('error', {
                message: `${e.category_id}`,
            });
        },
        onError: (e: AxiosError) => {
            sendBridgeEvent('error', {
                message: `피드 등록에 실패하였습니다.(${e?.response?.data})`,
            });
        },
        onSuccess: () => {
            sendBridgeEvent('back', true);
        },
    });
};

export default useAddFeed;

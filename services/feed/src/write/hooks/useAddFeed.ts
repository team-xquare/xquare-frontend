import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAddFeed, postAttachment, postFeedImage } from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
import { AxiosError } from 'axios';
import { b64toFile } from '../../utils/b64toFile';
import { PostFeedResponse } from '../types';
import { queryKeys } from '../../utils/queryKeys';

const useAddFeed = (categoryId: string) => {
    const queryClient = useQueryClient();
    const addFeedRequest = async (param: { fileBase64Arr: string[] } & PostFeedResponse) => {
        const { fileBase64Arr, ...postAddParam } = param;
        const fileArr = !!fileBase64Arr.length
            ? await Promise.all(fileBase64Arr.map((base64) => b64toFile(base64)))
            : [];
        const imageUrls = !!fileArr.length ? await postAttachment(fileArr) : { fileUrl: [] };
        const postResponse = await postAddFeed(postAddParam);
        await postFeedImage(postResponse.data.feed_id, imageUrls.fileUrl);
    };

    return useMutation(addFeedRequest, {
        onError: (e: AxiosError) => {
            sendBridgeEvent('error', {
                message: `피드 등록에 실패하였습니다.(${e.status})`,
            });
        },
        onSuccess: () => {
            const feedListKey = queryKeys.getFeedList(categoryId || '');
            queryClient.invalidateQueries([feedListKey]);
            sendBridgeEvent('back', true);
        },
    });
};

export default useAddFeed;

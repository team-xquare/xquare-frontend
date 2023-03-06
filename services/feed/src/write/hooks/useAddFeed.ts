import { useMutation } from '@tanstack/react-query';
import { postAddFeed, postAttachment, postFeedImage } from '../apis';
import { sendBridgeEvent } from '@shared/xbridge';
import { AxiosError } from 'axios';
import { b64toFile } from '../../utils/b64toFile';
import { PostFeedResponse } from '../types';
const useAddFeed = () => {
    const addFeedRequest = async (param: { fileBase64Arr: string[] } & PostFeedResponse) => {
        const { fileBase64Arr, ...postAddParam } = param;
        const fileArr = await Promise.all(fileBase64Arr.map((base64) => b64toFile(base64)));
        const imageUrls = await postAttachment(fileArr);
        const postResponse = await postAddFeed(postAddParam);
        await postFeedImage(postResponse.data.id, imageUrls.filesUrl);
    };
    return useMutation(addFeedRequest, {
        onError: (e: AxiosError) => {
            sendBridgeEvent('error', {
                message: `피드 등록에 실패하였습니다.(${e})`,
            });
        },
        onSuccess: () => {
            sendBridgeEvent('back', true);
        },
    });
};

export default useAddFeed;

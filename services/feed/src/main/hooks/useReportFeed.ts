import React from 'react';
import { sendBridgeEvent } from '@shared/xbridge/src/index';
import { useMutation } from '@tanstack/react-query';
import { postReportFeed } from '../apis';

const useReportFeed = () => {
    return useMutation(postReportFeed, {
        onError: () => {
            sendBridgeEvent('error', {
                message: '피드신고에 실패하였습니다.',
            });
        },
    });
};

export default useReportFeed;

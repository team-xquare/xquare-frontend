import axios from 'axios';
import { sendBridgeEvent } from '@shared/xbridge';

type ErrorStatusType =
    | '400'
    | '401'
    | '402'
    | '403'
    | '404'
    | '407'
    | '408'
    | '409'
    | '429'
    | '500';

const axiosErrorTemplate = (
    e: unknown,
    errorMessage?: Partial<Record<ErrorStatusType, string>>,
) => {
    let pickErrorMessage = '';
    if (axios.isAxiosError(e)) {
        const status = e.status as ErrorStatusType;
        const messageOrBlank = errorMessage?.[status];
        if (messageOrBlank) {
            pickErrorMessage = messageOrBlank;
        } else {
            switch (status) {
                case '403':
                    pickErrorMessage = '유저의 권한이 없습니다.';
                    break;
                case '429':
                    pickErrorMessage = '너무 많이 요청하였습니다. 조금 뒤 다시 이용해주세요.';
                    break;
                case '500':
                    pickErrorMessage =
                        '알 수 없는 오류가 발생하였습니다. 서버 관리자에게 문의하세요.';
                    break;
            }
        }
    } else {
        pickErrorMessage = '알 수 없는 오류가 발생하였습니다. 클라이언트 관리자에게 문의하세요.';
    }
    pickErrorMessage &&
        sendBridgeEvent('error', { message: pickErrorMessage }, ({ data }) => {
            alert(data.message);
        });
};

export default axiosErrorTemplate;

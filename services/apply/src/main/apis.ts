import { instance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';
import { StayStatus, StayCodeList } from './types';

export const getStayStatus = async () => {
    const path = queryKeys.getStayStatus();
    const { data } = await instance.get<StayStatus>(path);
    return data;
};

export const getStayList = async () => {
    const path = queryKeys.getStayList();
    const { data } = await instance.get<StayCodeList>(path);
    return data;
};

export const putStayStatus = async (props: StayStatus) => {
    await instance.put('/stay', props);
};

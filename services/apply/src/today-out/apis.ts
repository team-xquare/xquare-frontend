import { pickInstance } from '../utils/axios';
import { TodayOutApplyParam } from './types';

const todayOutApplyRequest = async (param: TodayOutApplyParam) => {
    const uri = '/applications';
    return await pickInstance.post(uri, param);
};

export default todayOutApplyRequest;

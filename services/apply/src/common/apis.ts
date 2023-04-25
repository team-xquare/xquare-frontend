import { timetableInstance } from '../utils/axios';
import dateFormat from '../utils/function/dateFormat';
import { queryKeys } from '../utils/queryKeys';
import { GetTimeTableResponseDto } from './types';

export const getTimeTable = async () => {
    const uri = queryKeys.getTimeTables(dateFormat());
    const response = await timetableInstance.get<GetTimeTableResponseDto>(uri);
    return response.data;
};

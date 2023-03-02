import { pickInstance } from '../utils/axios';
import { queryKeys } from '../utils/queryKeys';

export const getTimeTable = async () => {
    const newDate = new Date();
    const uri = queryKeys.getTimeTables(newDate.toString());
    const response = await pickInstance.get(uri);
    return response.data;
};

import { useMutation } from 'react-query';
import { postWeekendOut } from '../apis';

const useWeekendOut = () => {
    return useMutation(postWeekendOut);
};

export default useWeekendOut;

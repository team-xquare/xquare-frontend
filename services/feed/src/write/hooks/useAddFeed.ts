import { useMutation } from '@tanstack/react-query';
import { postAddFeed } from '../apis';

const useAddFeed = () => {
    return useMutation(postAddFeed);
};

export default useAddFeed;

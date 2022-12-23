import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useEffectState = <T>(value: T): [T, Dispatch<SetStateAction<T>>] => {
    const [state, setState] = useState(value);
    useEffect(() => {
        setState(value);
    }, [value]);
    return [state, setState];
};

export default useEffectState;

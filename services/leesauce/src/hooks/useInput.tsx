import React, { useCallback } from 'react';
import { useState } from 'react';

const useInput = (defaultValue?: string) => {
    const [input, setInput] = useState(defaultValue || '');
    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        },
        [setInput],
    );

    return [input, onChange] as const;
};

export default useInput;

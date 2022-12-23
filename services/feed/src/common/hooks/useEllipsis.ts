import { useMemo, useState } from 'react';

const useEllipsis = (contents: string, defaultLimits?: number) => {
    const [limits, setLimits] = useState(defaultLimits || 100);
    const isEllipsis = contents.length > limits;
    const onClickMore = () => {
        setLimits(contents.length);
    };
    const ellipsisContent = useMemo(() => contents.slice(0, limits), [limits, contents]);
    return { isEllipsis, onClickMore, ellipsisContent };
};

export default useEllipsis;

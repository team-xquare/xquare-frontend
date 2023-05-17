import React from 'react';

const FormatTime = (time?: string) => {
    const tweTime = time?.split(':');
    tweTime?.pop();
    return tweTime?.join(':');
};

export default FormatTime;

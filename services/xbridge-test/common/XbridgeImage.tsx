import { ButtonProps } from '@semicolondsm/ui/dist/components/Button/types';
import { sendBridgeEvent } from '@shared/xbridge';
import React, { FC, HTMLProps, ReactPropTypes } from 'react';

interface Props {
    src: string;
}
const XbridgeImage = ({ src }: Props) => {
    return (
        <img
            src={src}
            onClick={() => sendBridgeEvent('imageDetail', [src], () => console.log(src))}></img>
    );
};

export default XbridgeImage;

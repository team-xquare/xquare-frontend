import { Device } from '@xquare/utils';
import { useEffect } from 'react';

type BridgeType = 'navigate' | 'back' | 'imageDetail' | 'confirm';

interface XBridgeSendData extends Record<BridgeType, unknown> {
    navigate: string;
    imageDetail: string[];
    back: boolean;
    confirm: {
        message: string;
        confirmText: string;
        cacelText: string;
    };
}

interface XBridgeResponseData extends Record<BridgeType, unknown> {
    confirm: {
        success: boolean;
    };
}

export interface BrowserActionParameters<T> {
    bridge: BridgeType;
    data: T;
}
export const sendBridgeEvent = <T extends BridgeType>(
    bridge: T,
    data: XBridgeSendData[T],
    browserAction?: (params: BrowserActionParameters<XBridgeSendData[T]>) => any,
) => {
    const globalThis = window as any;
    if (Device.isMobileWeb()) {
        if (Device.getOSByUserAgent() === 'ios')
            globalThis.webkit.messageHandlers[bridge].postMessage(data);
        else {
            globalThis.webview[bridge](data);
        }
    } else {
        return browserAction?.({ bridge, data });
    }
};

export const useBridgeHandler = <T extends BridgeType>(
    bridge: T,
    callback: (event: CustomEvent<XBridgeResponseData[T]>) => any,
) => {
    useEffect(() => {
        const onCallback = ((event: CustomEvent<XBridgeResponseData[T]>) => {
            callback(event);
        }) as EventListener;

        window.addEventListener(`${bridge}XBridge`, onCallback);

        return () => window.removeEventListener(`${bridge}XBridge`, onCallback);
    }, [callback, bridge]);
};

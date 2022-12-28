import { Device } from '@xquare/utils';
import { useEffect } from 'react';
import { v4 } from 'uuid';
type BridgeType =
    | 'navigate'
    | 'back'
    | 'imageDetail'
    | 'confirm'
    | 'error'
    | 'photoPicker'
    | 'actionSheet';

type OneByOneBridgeType = 'confirm' | 'photoPicker' | 'actionSheet';

interface XBridgeSendData extends Record<BridgeType, unknown> {
    navigate: {
        url: string;
        title: string;
    };
    imageDetail: string[];
    back: boolean;
    confirm: {
        message: string;
        confirmText: string;
        cancelText: string;
    };
    error: {
        message: string;
    };
    photoPicker: {};
    actionSheet: { menu: string[] };
}

interface XBridgeResponseData extends Record<BridgeType, unknown> {
    confirm: {
        success: boolean;
    };
    photoPicker: {
        photos: string[];
    };
    actionSheet: {
        index: number;
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

    const stringData = typeof data === 'object' ? JSON.stringify(data) : String(data);

    if (Device.isMobileWeb()) {
        if (Device.getOSByUserAgent() === 'ios')
            globalThis.webkit.messageHandlers[bridge].postMessage(stringData);
        else {
            globalThis.webview[bridge](stringData);
        }
    } else {
        return browserAction?.({ bridge, data });
    }
};

export const useBridgeHandler = <T extends OneByOneBridgeType>(
    bridge: T,
    callback: (event: CustomEvent<XBridgeResponseData[T]>) => any,
    data: XBridgeSendData[T],
    browserAction?: (params: BrowserActionParameters<XBridgeSendData[T]>) => void,
) => {
    const bridgeUuid = v4();
    useEffect(() => {
        const onCallback = ((event: CustomEvent<XBridgeResponseData[T] & { id: string }>) => {
            alert(JSON.stringify(event.detail));
            const isMine = event.detail.id === bridgeUuid;
            if (isMine) {
                callback(event);
            }
        }) as EventListener;

        window.addEventListener(`${bridge}XBridge`, onCallback);
        return () => window.removeEventListener(`${bridge}XBridge`, onCallback);
    }, [callback, bridge]);

    return () =>
        sendBridgeEvent(bridge, { ...data, id: bridgeUuid } as XBridgeSendData[T], browserAction);
};

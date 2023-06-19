import { Device } from '@xquare/utils';
import { useEffect, useMemo } from 'react';
import { v4 } from 'uuid';
type BridgeType =
    | 'navigate'
    | 'back'
    | 'imageDetail'
    | 'confirm'
    | 'error'
    | 'success'
    | 'photoPicker'
    | 'actionSheet'
    | 'timePicker'
    | 'isRightButtonEnabled'
    | 'periodPicker';

type OneByOneBridgeType = 'confirm' | 'photoPicker' | 'actionSheet' | 'timePicker' | 'periodPicker';

interface XBridgeRequestData extends Record<BridgeType, unknown> {
    navigate: {
        url: string;
        title: string;
        rightButtonText?: string;
    };
    imageDetail: { images: string[] };
    back: boolean;
    confirm: {
        message: string;
        confirmText: string;
        cancelText: string;
    };
    error: {
        message: string;
    };
    success: {
        title: string;
        message: string;
    };
    photoPicker: {};
    actionSheet: { menu: string[] };
    timePicker: {
        time: string;
    };
    isRightButtonEnabled: {
        isEnabled: boolean;
    };
    periodPicker: {
        period?: number;
    };
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
    timePicker: {
        time: string;
    };
    rightButtonTaped: {};
    periodPicker: {
        period: number;
    };
}

export interface BrowserActionParameters<T> {
    bridge: BridgeType;
    data: T;
}
export const sendBridgeEvent = <T extends BridgeType>(
    bridge: T,
    data: XBridgeRequestData[T],
    browserAction?: (params: BrowserActionParameters<XBridgeRequestData[T]>) => any,
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
    data: XBridgeRequestData[T],
    browserAction?: (params: BrowserActionParameters<XBridgeRequestData[T]>) => void,
) => {
    const bridgeUuid = useMemo(() => v4(), []);
    useEffect(() => {
        const onCallback = ((event: CustomEvent<XBridgeResponseData[T] & { id: string }>) => {
            const isMine = event.detail.id === bridgeUuid;
            isMine && callback(event);
        }) as EventListener;

        window.addEventListener(`${bridge}XBridge`, onCallback);
        return () => window.removeEventListener(`${bridge}XBridge`, onCallback);
    }, [callback, bridge]);

    return () =>
        sendBridgeEvent(
            bridge,
            { ...data, id: bridgeUuid } as XBridgeRequestData[T],
            browserAction,
        );
};

export const useBridgeCallback = <T extends keyof XBridgeResponseData>(
    bridge: T,
    callback: (event: CustomEvent<XBridgeResponseData[T]>) => any,
    bridgeId: string | undefined,
) => {
    useEffect(() => {
        const onCallback = ((
            event: CustomEvent<XBridgeResponseData[T] & { id: string | undefined }>,
        ) => {
            const isMine = event.detail.id === bridgeId;
            isMine && callback(event);
        }) as EventListener;

        window.addEventListener(`${bridge}XBridge`, onCallback);
        return () => window.removeEventListener(`${bridge}XBridge`, onCallback);
    }, [callback, bridge]);
};

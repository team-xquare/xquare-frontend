import { Device } from '@xquare/utils';

type BridgeType = 'navigate' | 'back' | 'image-detail';

export interface BrowserActionParameters<T> {
    bridge: BridgeType;
    data: T;
}
export const sendBridgeEvent = <T extends unknown>(
    bridge: BridgeType,
    data: T,
    browserAction?: (params: BrowserActionParameters<T>) => any,
) => {
    const globalThis = window as any;
    if (Device.isMobileWeb()) {
        if (Device.getOSByUserAgent() === 'ios')
            globalThis.webkit.messageHandlers[bridge].postMessage(JSON.stringify(data));
        else {
            globalThis.webview.postMessage(JSON.stringify(data));
        }
    } else {
        browserAction && browserAction({ bridge, data });
    }
};

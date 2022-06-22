import { Device } from '@xquare/utils';

type BridgeType = 'navigate' | 'back' | 'imageDetail';

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
    console.log(data);
    if (Device.isMobileWeb()) {
        if (Device.getOSByUserAgent() === 'ios')
            globalThis.webkit.messageHandlers[bridge].postMessage(data);
        else {
            globalThis.webview[bridge](data);
        }
    } else {
        browserAction && browserAction({ bridge, data });
    }
};

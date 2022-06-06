import { Device } from '@xquare/utils';

export interface BrowserActionParameters<T> {
    bridge: string;
    data: T;
}
export const sendBridgeEvent = <T extends unknown>(
    bridge: string,
    data: T,
    browserAction?: (params: BrowserActionParameters<T>) => any,
) => {
    const globalThis = window as any;
    console.log(data);
    if (Device.isMobileWeb()) {
        if (Device.getOSByUserAgent() === 'ios')
            globalThis.webkit.messageHandlers[bridge].postMessage(JSON.stringify(data));
        else if (Device.getOSByUserAgent() === 'android') {
            globalThis.webview.postMessage(JSON.stringify(data));
        } else {
            return false;
        }
    } else {
        browserAction && browserAction({ bridge, data });
    }
};

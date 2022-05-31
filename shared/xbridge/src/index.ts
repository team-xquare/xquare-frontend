import { Device } from '@xquare/utils';

interface BridgeEvent<T> {
    type: string;
    data: T;
}

export const sendBridgeEvent = <T extends unknown>(
    event: BridgeEvent<T>,
    browserAction: Function,
) => {
    const globalThis = window as any;
    if (Device.isMobileWeb()) {
        if (Device.getOSByUserAgent() === 'ios')
            globalThis.webkit.messageHandlers[event.type].postMessage(JSON.stringify(event));
        else {
            globalThis.webview.postMessage(JSON.stringify(event));
        }
    } else {
        browserAction();
    }
};

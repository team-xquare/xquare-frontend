import { getCookie, removeCookies, setCookie } from 'cookies-next';

export const customCookie = {
    get: {
        access_token: () => getCookie('access_token'),
        refresh_token: () => getCookie('refresh_token'),
    },
    set: {
        token: (access: string, refresh: string, expires: string) => {
            const date = new Date();
            date.setDate(date.getDate() + 5);

            setCookie('access_token', access, { expires: new Date(expires) });
            setCookie('refresh_token', refresh, { expires: date });
        },
    },
    remove: {
        access_token: () => removeCookies('access_token'),
        refresh_token: () => removeCookies('refresh_token'),
    },
} as const;

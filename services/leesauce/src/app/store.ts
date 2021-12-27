import { configureStore, Store } from '@reduxjs/toolkit';
import { resourceAPI } from '../services/resource';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from './rootReducer';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([resourceAPI.middleware]),
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

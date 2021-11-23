import { configureStore } from '@reduxjs/toolkit';
import { resourceAPI } from '../services/resource';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([resourceAPI.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

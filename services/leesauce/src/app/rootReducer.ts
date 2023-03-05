import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { resourceAPI } from '../services/resource';

interface State {}

const rootReducer = (state: any | undefined, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                [resourceAPI.reducerPath]: resourceAPI.reducer,
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;

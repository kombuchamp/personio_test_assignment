import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { API } from '../services/API';
import { filtersReducer } from './reducers/Filters';
import { themeReducer } from './reducers/Theme';
import { sortingReducer } from './reducers/Sorting';
import { applyQueryParamsMiddleware } from './middleware/queryParamsMiddleware/applyQueryParamsMiddleware';

const rootReducer = combineReducers({
    filtersReducer,
    themeReducer,
    sortingReducer,
    // RTK Query reducer
    [API.reducerPath]: API.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware(),
            API.middleware,
            applyQueryParamsMiddleware(),
        ],
    });
};

/**
 * Redux-related types
 *
 * @see https://redux.js.org/usage/usage-with-typescript
 */

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof setupStore>;
export type Dispatch = Store['dispatch'];

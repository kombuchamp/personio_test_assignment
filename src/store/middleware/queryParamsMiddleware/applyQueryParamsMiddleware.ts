import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { DataSerializer } from './DataSerializer';

export const applyQueryParamsMiddleware: () => Middleware<{}, RootState> =
    () => (storeApi) => (next) => (action) => {
        const result = next(action);

        const store = storeApi.getState();
        DataSerializer.saveData(store);

        return result;
    };

import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { QueryParamsStoreSerializer } from './DataSerializer';

/**
 * Middleware for storing select parameters from the store
 * to query parameters
 *
 * NOTE: I made a decision to opt out from usage of something like react-router
 * as all we need of routing is storing some data in the url.
 * Query params is a good choice for that because, for one, it will work if this
 * application will be placed by some path using server-side routing
 */
export const applyQueryParamsMiddleware: () => Middleware<{}, RootState> =
    () => (storeApi) => (next) => (action) => {
        const result = next(action);

        const store = storeApi.getState();
        QueryParamsStoreSerializer.saveData(store);

        return result;
    };

import { QueryParamsStoreSerializer } from '../store/middleware/queryParamsMiddleware/DataSerializer';
import { SavedParametersObject } from '../store/middleware/queryParamsMiddleware/DataSerializer/types';

/**
 * Application state persist-able fields that were restored from a query string
 * with a fallback to default values
 */
export const PERSISTED_STORE_DATA: SavedParametersObject =
    QueryParamsStoreSerializer.restoreData();

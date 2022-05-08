import { RootState } from '../../../store';
import { SavedParametersObject } from './types';
import { SAVED_PARAMETERS_PARSERS } from './persistedDataParsers';
import { DEFAULT_SAVED_PARAMETERS_OBJECT, SAVED_PARAMETERS } from './const';

/**
 * Saves and restores persist-able data from application state to query params
 */
export class QueryParamsStoreSerializer {
    static saveData(data: RootState) {
        const { sortBy, direction } = data.sortingReducer;
        const { positionApplied, name, status } = data.filtersReducer;

        const savedParametersObject = {
            sortBy,
            direction,
            positionApplied,
            name,
            status,
        };

        const url = new URL(window.location.toString());
        for (const [key, value] of Object.entries(savedParametersObject)) {
            if (value) {
                url.searchParams.set(key, value);
            } else {
                url.searchParams.delete(key);
            }
        }

        window.history.pushState({}, '', url);
    }

    static restoreData(): SavedParametersObject {
        const url = new URL(window.location.toString());
        const result: Record<keyof SavedParametersObject, any> = {
            ...DEFAULT_SAVED_PARAMETERS_OBJECT,
        };
        for (const param of SAVED_PARAMETERS) {
            const value = url.searchParams.get(param);
            const parser = SAVED_PARAMETERS_PARSERS[param];
            const parsedValue = parser(value);
            result[param] = parsedValue;
        }

        return result as SavedParametersObject;
    }
}

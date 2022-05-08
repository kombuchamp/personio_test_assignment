import { Filters } from '../../../reducers/Filters';
import { Sorting } from '../../../reducers/Sorting';
import { SavedParametersObject } from './types';

export const SAVED_PARAMETERS: (keyof Filters | keyof Sorting)[] = [
    'name',
    'status',
    'sortBy',
    'direction',
    'positionApplied',
];

export const DEFAULT_SAVED_PARAMETERS_OBJECT: SavedParametersObject = {
    sortBy: undefined,
    direction: 'asc',
    name: '',
    status: '',
    positionApplied: '',
};

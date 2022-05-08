import { Filters } from '../../../reducers/Filters';
import { Sorting } from '../../../reducers/Sorting';

export type SavedParametersObject = {
    [K in keyof Filters | keyof Sorting]: K extends keyof Filters
        ? Filters[K]
        : K extends keyof Sorting
        ? Sorting[K]
        : never;
};
export type SavedParametersParsers = {
    [K in keyof Filters | keyof Sorting]: K extends keyof Filters
        ? (value: unknown) => Filters[K]
        : K extends keyof Sorting
        ? (value: unknown) => Sorting[K]
        : never;
};

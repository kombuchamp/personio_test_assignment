import { isStatus } from '../../../../types/Status';
import { isSortableColumn } from '../../../../components/CandidatesDataGrid/utils/sorting/isSortableColumn';
import { isSortDirection } from '../../../../types/SortDirection';
import { SavedParametersParsers } from './types';

export const stringParser = (value: unknown) => {
    if (typeof value !== 'string') {
        return '';
    }
    return value;
};

export const statusParser = (value: unknown) => {
    if (isStatus(value)) {
        return value;
    }
    return '';
};

export const sortByParser = (value: unknown) => {
    if (isSortableColumn(value)) {
        return value;
    }
    return undefined;
};

export const sortDirectionParser = (value: unknown) => {
    if (isSortDirection(value)) {
        return value;
    }
    return 'asc';
};

export const SAVED_PARAMETERS_PARSERS: SavedParametersParsers = {
    name: stringParser,
    status: statusParser,
    positionApplied: stringParser,
    sortBy: sortByParser,
    direction: sortDirectionParser,
};

import { CandidatesData } from '../../../../types/CandidatesData';
import { COLUMN_SORTING_COMPARATORS } from './sortingComparators';
import { Sorting } from '../../../../store/reducers/Sorting';

/**
 * Applies sorting to provided data
 *
 * @param data
 * @param sorting
 */
export const applySorting = (data: CandidatesData, sorting: Sorting) => {
    const { sortBy, direction } = sorting;
    if (!sortBy) {
        return data;
    }
    return [...data].sort(COLUMN_SORTING_COMPARATORS[sortBy](direction));
};

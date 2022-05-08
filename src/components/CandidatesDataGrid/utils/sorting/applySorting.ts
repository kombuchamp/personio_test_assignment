import { SortableColumn, Sorting } from '../../../../store/reducers/Sorting';
import { CandidatesDataEntry } from '../../../../types/CandidatesDataEntry';
import { CandidatesData } from '../../../../types/CandidatesData';
import { COLUMN_SORTING_COMPARATORS } from './sortingComparators';

export const applySorting = (data: CandidatesData, sorting: Sorting) => {
    const { sortBy, direction } = sorting;
    if (!sortBy) {
        return data;
    }
    return [...data].sort(COLUMN_SORTING_COMPARATORS[sortBy](direction));
};

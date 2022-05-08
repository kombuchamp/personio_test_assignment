import { CandidatesData } from '../../../../types/CandidatesData';
import { Filters } from '../../../../store/reducers/Filters';
import { CandidatesDataEntry } from '../../../../types/CandidatesDataEntry';
import { COLUMN_FILTER_COMPARATORS } from './filterComparators';
import { FILTERABLE_COLUMNS } from '../../const';

/**
 * Applies filters to provided data
 *
 * @param data
 * @param filters
 */
export const applyFilters = (data: CandidatesData, filters: Filters) => {
    return data.filter((entry) => {
        for (const column of FILTERABLE_COLUMNS) {
            const comparator = COLUMN_FILTER_COMPARATORS[column];
            if (!comparator(entry, filters)) {
                return false;
            }
        }
        return true;
    });
};

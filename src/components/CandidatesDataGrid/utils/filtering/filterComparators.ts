import { CandidatesDataEntry } from '../../../../types/CandidatesDataEntry';
import { Filters } from '../../../../store/reducers/Filters';

export type FilterComparator = (
    value: CandidatesDataEntry,
    filterValue: Filters
) => boolean;

const stringComparator = (value: string, filteredValue: string) => {
    if (filteredValue === '') {
        return true;
    }
    return value.toUpperCase().startsWith(filteredValue.toUpperCase());
};

export const COLUMN_FILTER_COMPARATORS: Record<
    keyof Filters,
    FilterComparator
> = {
    name: ({ name }, { name: filterName }) =>
        stringComparator(name, filterName),
    status: ({ status }, { status: filterStatus }) =>
        !filterStatus || Object.is(status, filterStatus),
    positionApplied: (
        { positionApplied },
        { positionApplied: filterPositionApplied }
    ) => stringComparator(positionApplied, filterPositionApplied),
};

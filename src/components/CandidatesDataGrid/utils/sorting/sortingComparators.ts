import { CandidatesDataEntry } from '../../../../types/CandidatesDataEntry';
import { SortableColumn } from '../../../../types/SortableColumn';
import { SortDirection } from '../../../../types/SortDirection';

type SortingComparator = (
    a: CandidatesDataEntry,
    b: CandidatesDataEntry
) => number;

export const COLUMN_SORTING_COMPARATORS: Record<
    SortableColumn,
    (direction: SortDirection) => SortingComparator
> = {
    positionApplied: (direction) => (a, b) => {
        const { positionApplied: positionAppliedA } = a;
        const { positionApplied: positionAppliedB } = b;
        return compareStrings(positionAppliedA, positionAppliedB, direction);
    },
    yearsOfExperience: (direction) => (a, b) => {
        const { yearsOfExperience: yearsOfExperienceA } = a;
        const { yearsOfExperience: yearsOfExperienceB } = b;
        return compareNumbers(
            yearsOfExperienceA,
            yearsOfExperienceB,
            direction
        );
    },
    applicationDate: (direction) => (a, b) => {
        const { applicationDate: applicationDateA } = a;
        const { applicationDate: applicationDateB } = b;
        return compareDates(
            new Date(applicationDateA),
            new Date(applicationDateB),
            direction
        );
    },
};

export const compareDates = (a: Date, b: Date, direction: 'asc' | 'desc') => {
    const multiplier = direction === 'asc' ? -1 : 1;
    return (a.getTime() - b.getTime()) * multiplier;
};

export const compareStrings = (
    a: string,
    b: string,
    direction: 'asc' | 'desc'
) => {
    const result = a.localeCompare(b);
    const multiplier = direction === 'asc' ? -1 : 1;
    return result * multiplier;
};

export const compareNumbers = (
    a: number,
    b: number,
    direction: 'asc' | 'desc'
) => {
    const multiplier = direction === 'asc' ? -1 : 1;
    return (a - b) * multiplier;
};

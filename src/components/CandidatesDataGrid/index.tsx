import { FC } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';
import { CandidatesData } from '../../types/CandidatesData';
import { CandidatesDataEntry } from '../../types/CandidatesDataEntry';
import css from './index.module.css';
import { Filters } from '../../store/reducers/Filters';
import {
    SortableColumn,
    sortBy,
    Sorting,
    switchSortDirection,
} from '../../store/reducers/Sorting';
import { useTypedDispatch } from '../../hooks/redux-helpers';

const COLUMNS: (keyof CandidatesDataEntry)[] = [
    'name',
    'email',
    'age',
    'yearsOfExperience',
    'positionApplied',
    'applicationDate',
    'status',
];

const COLUMN_NAMES: Partial<Record<keyof CandidatesDataEntry, string>> = {
    name: 'Name',
    email: 'email',
    age: 'Age',
    yearsOfExperience: 'Years of experience',
    positionApplied: 'Position Applied',
    applicationDate: 'Application Date',
    status: 'Status',
};

export const CandidatesDataGrid: FC<{
    data: CandidatesData;
    filters: Filters;
    sorting: Sorting;
}> = ({ data, filters, sorting }) => {
    const dispatch = useTypedDispatch();

    const filteredData = applyFilters(data, filters);
    const sortedData = applySorting(filteredData, sorting);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {COLUMNS.map((column) => {
                        return (
                            <TableCell
                                className={css.DataGrid__headerCell}
                                key={column}
                            >
                                {isSortableColumn(column) ? (
                                    <TableSortLabel
                                        active={sorting.sortBy === column}
                                        direction={sorting.direction}
                                        onClick={() => {
                                            if (sorting.sortBy !== column) {
                                                dispatch(sortBy(column));
                                                return;
                                            }
                                            dispatch(switchSortDirection());
                                        }}
                                    >
                                        <b>{COLUMN_NAMES[column]}</b>
                                    </TableSortLabel>
                                ) : (
                                    <b>{COLUMN_NAMES[column]}</b>
                                )}
                            </TableCell>
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {sortedData.map((entry) => {
                    return (
                        <TableRow key={entry.id}>
                            {COLUMNS.map((col) => {
                                return (
                                    <TableCell
                                        key={col}
                                        className={css.DataGrid__col}
                                    >
                                        {entry[col]}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

const stringComparator = (value: string, filteredValue: string) => {
    if (filteredValue === '') {
        return true;
    }
    return value.toUpperCase().startsWith(filteredValue.toUpperCase());
};

const FILTERABLE_COLUMNS /*: readonly (keyof Filters)[] */ = [
    'name',
    'status',
    'positionApplied',
] as const;

type FilterComparator = (
    value: CandidatesDataEntry,
    filterValue: Filters
) => boolean;

const COLUMN_FILTER_COMPARATORS: Record<keyof Filters, FilterComparator> = {
    name: ({ name }, { name: filterName }) =>
        stringComparator(name, filterName),
    status: ({ status }, { status: filterStatus }) =>
        !filterStatus || Object.is(status, filterStatus),
    positionApplied: (
        { positionApplied },
        { positionApplied: filterPositionApplied }
    ) => stringComparator(positionApplied, filterPositionApplied),
};

const applyFilters = (data: CandidatesData, filters: Filters) => {
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

const SORTABLE_COLUMNS: SortableColumn[] = [
    'positionApplied',
    'yearsOfExperience',
    'applicationDate',
];

function isSortableColumn(
    column: keyof CandidatesDataEntry
): column is SortableColumn {
    return SORTABLE_COLUMNS.includes(column as SortableColumn);
}

type SortingComparator = (
    a: CandidatesDataEntry,
    b: CandidatesDataEntry
) => number;

const compareStrings = (a: string, b: string, direction: 'asc' | 'desc') => {
    const result = a.localeCompare(b);
    const multiplier = direction === 'asc' ? -1 : 1;
    return result * multiplier;
};

const compareNumbers = (a: number, b: number, direction: 'asc' | 'desc') => {
    const multiplier = direction === 'asc' ? -1 : 1;
    return (a - b) * multiplier;
};

const compareDates = (a: Date, b: Date, direction: 'asc' | 'desc') => {
    const multiplier = direction === 'asc' ? -1 : 1;
    return (a.getTime() - b.getTime()) * multiplier;
};

const COLUMN_SORTING_COMPARATORS: Record<
    SortableColumn,
    (direction: 'asc' | 'desc') => SortingComparator
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

const applySorting = (data: CandidatesData, sorting: Sorting) => {
    const { sortBy, direction } = sorting;
    if (!sortBy) {
        return data;
    }
    return [...data].sort(COLUMN_SORTING_COMPARATORS[sortBy](direction));
};

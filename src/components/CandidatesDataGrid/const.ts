import { CandidatesDataEntry } from '../../types/CandidatesDataEntry';
import { Filters } from '../../store/reducers/Filters';
import { SortableColumn } from '../../store/reducers/Sorting';

/**
 * Columns of displayed table
 */
export const COLUMNS: (keyof CandidatesDataEntry)[] = [
    'name',
    'email',
    'age',
    'yearsOfExperience',
    'positionApplied',
    'applicationDate',
    'status',
];

/**
 * Display names of columns
 * TODO: i18n
 */
export const COLUMN_NAMES: Partial<Record<keyof CandidatesDataEntry, string>> =
    {
        name: 'Name',
        email: 'email',
        age: 'Age',
        yearsOfExperience: 'Years of experience',
        positionApplied: 'Position Applied',
        applicationDate: 'Application Date',
        status: 'Status',
    };

export const FILTERABLE_COLUMNS: (keyof Filters)[] = [
    'name',
    'status',
    'positionApplied',
];

export const SORTABLE_COLUMNS: SortableColumn[] = [
    'positionApplied',
    'yearsOfExperience',
    'applicationDate',
];

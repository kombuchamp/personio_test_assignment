import { CandidatesDataEntry } from '../../types/CandidatesDataEntry';
import { Filters } from '../../store/reducers/Filters';
import { SortableColumn } from '../../types/SortableColumn';
import {
    COLUMN_AGE_TEXT,
    COLUMN_APPLICATION_DATE_TEXT,
    COLUMN_EMAIL_TEXT,
    COLUMN_NAME_TEXT,
    COLUMN_POSITION_APPLIED_TEXT,
    COLUMN_STATUS_TEXT,
    COLUMN_YEARS_OF_EXPERIENCE_TEXT,
} from '../../const/texts';

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
 */
export const COLUMN_NAMES: Partial<Record<keyof CandidatesDataEntry, string>> =
    {
        name: COLUMN_NAME_TEXT,
        email: COLUMN_EMAIL_TEXT,
        age: COLUMN_AGE_TEXT,
        yearsOfExperience: COLUMN_YEARS_OF_EXPERIENCE_TEXT,
        positionApplied: COLUMN_POSITION_APPLIED_TEXT,
        applicationDate: COLUMN_APPLICATION_DATE_TEXT,
        status: COLUMN_STATUS_TEXT,
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

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

const SORTABLE_COLUMNS: (keyof CandidatesDataEntry)[] = [
    'positionApplied',
    'yearsOfExperience',
    'applicationDate',
];

const COLUMN_NAMES: Partial<Record<keyof CandidatesDataEntry, string>> = {
    name: 'Name',
    email: 'e-mail',
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
                                {SORTABLE_COLUMNS.includes(column) ? (
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
                {data.map((entry) => {
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

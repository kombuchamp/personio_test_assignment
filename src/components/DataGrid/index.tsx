import { FC } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { CandidatesData } from '../../types/CandidatesData';
import { CandidatesDataEntry } from '../../types/CandidatesDataEntry';
import css from './index.module.css';

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
    email: 'e-mail',
    age: 'Age',
    yearsOfExperience: 'Years of experience',
    positionApplied: 'Position Applied',
    applicationDate: 'Application Date',
    status: 'Status',
};

export const CandidatesDataGrid: FC<{ data: CandidatesData }> = ({ data }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {COLUMNS.map((column) => {
                        return (
                            <TableCell key={column}>
                                <b>{COLUMN_NAMES[column]}</b>
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

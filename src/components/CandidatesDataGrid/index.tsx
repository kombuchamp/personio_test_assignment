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
import css from './index.module.css';
import { Filters } from '../../store/reducers/Filters';
import {
    sortBy,
    Sorting,
    switchSortDirection,
} from '../../store/reducers/Sorting';
import { useTypedDispatch } from '../../hooks/redux-helpers';
import { applyFilters } from './utils/filtering/applyFilters';
import { applySorting } from './utils/sorting/applySorting';
import { COLUMN_NAMES, COLUMNS } from './const';
import { isSortableColumn } from './utils/sorting/isSortableColumn';

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

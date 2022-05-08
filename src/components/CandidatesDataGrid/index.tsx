import { FC, memo } from 'react';
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

/**
 * Displays table with applications data
 *
 * NOTE: I decided to acquire data, filters and sorting parameters through the props here
 * and rely on React.memo to avoid redundant calculations (renders, filters, sortings)
 * This way it renders everytime one of these three change, so I dont' need to run effects or useMemo-es here
 * for that cause.
 * In my opinion, it makes it easier to read the components code, easier to debounce values (see Content component)
 * and it will be probably easier to opt-in for server-side filtering and sorting
 *
 * @param data
 * @param filters
 * @param sorting
 * @constructor
 */
const CandidatesDataGridInternal: FC<{
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

export const CandidatesDataGrid = memo(CandidatesDataGridInternal);

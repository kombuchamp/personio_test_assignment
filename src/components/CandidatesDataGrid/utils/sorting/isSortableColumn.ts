import { SORTABLE_COLUMNS } from '../../const';
import { SortableColumn } from '../../../../types/SortableColumn';

export function isSortableColumn(column: unknown): column is SortableColumn {
    return SORTABLE_COLUMNS.includes(column as SortableColumn);
}

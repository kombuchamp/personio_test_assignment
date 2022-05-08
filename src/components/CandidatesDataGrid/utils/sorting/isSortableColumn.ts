import { CandidatesDataEntry } from '../../../../types/CandidatesDataEntry';
import { SortableColumn } from '../../../../store/reducers/Sorting';
import { SORTABLE_COLUMNS } from '../../const';

export function isSortableColumn(
    column: keyof CandidatesDataEntry
): column is SortableColumn {
    return SORTABLE_COLUMNS.includes(column as SortableColumn);
}

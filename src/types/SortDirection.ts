export type SortDirection = 'asc' | 'desc';

export const isSortDirection = (value: unknown): value is SortDirection => {
    if (value === 'asc' || value === 'desc') {
        return true;
    }
    return false;
};

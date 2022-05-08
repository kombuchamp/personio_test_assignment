import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CandidatesDataEntry } from '../../types/CandidatesDataEntry';
import { SortableColumn } from '../../types/SortableColumn';
import { PERSISTED_STORE_DATA } from '../../const/persistedStoreData';
import { SortDirection } from '../../types/SortDirection';

export type Sorting = {
    sortBy: Extract<keyof CandidatesDataEntry, SortableColumn> | undefined;
    direction: SortDirection;
};

const initialState: Sorting = {
    sortBy: PERSISTED_STORE_DATA.sortBy,
    direction: PERSISTED_STORE_DATA.direction,
};

export const sortingSlice = createSlice({
    name: 'Sorting',
    initialState,
    reducers: {
        sortBy: (state, action: PayloadAction<Sorting['sortBy']>) => {
            state.sortBy = action.payload;
        },
        switchSortDirection: (state) => {
            state.direction = state.direction === 'asc' ? 'desc' : 'asc';
        },
    },
});

export const { sortBy, switchSortDirection } = sortingSlice.actions;

export const sortingReducer = sortingSlice.reducer;

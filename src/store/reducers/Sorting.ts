import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CandidatesDataEntryDTO } from '../../types/CandidatesDataEntryDTO';
import { CandidatesDataEntry } from '../../types/CandidatesDataEntry';

export type Sorting = {
    sortBy: keyof CandidatesDataEntry | undefined;
    direction: 'asc' | 'desc';
};

const initialState: Sorting = {
    sortBy: undefined,
    direction: 'asc',
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

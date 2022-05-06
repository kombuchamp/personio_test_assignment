import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CandidatesDataEntryDTO } from '../../types/CandidatesDataEntryDTO';

export type Sorting = {
    sortBy: keyof CandidatesDataEntryDTO | undefined;
};

const initialState: Sorting = {
    sortBy: undefined,
};

export const sortingSlice = createSlice({
    name: 'Sorting',
    initialState,
    reducers: {
        setSorting: (state, action: PayloadAction<Sorting>) => {
            state.sortBy = action.payload.sortBy;
        },
    },
});

export const { setSorting } = sortingSlice.actions;

export const sortingReducer = sortingSlice.reducer;

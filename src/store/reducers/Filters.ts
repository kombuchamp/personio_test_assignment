import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CandidatesDataEntryDTO } from '../../types/CandidatesDataEntryDTO';

export type Filters = {
    name: CandidatesDataEntryDTO['name'];
    status: CandidatesDataEntryDTO['status'] | '';
    positionApplied: CandidatesDataEntryDTO['position_applied'];
};

const initialState: Filters = {
    name: '',
    status: '',
    positionApplied: '',
};

export const filtersSlice = createSlice({
    name: 'Filters',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
            Object.assign(state, action.payload);
        },
    },
});

export const { setFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

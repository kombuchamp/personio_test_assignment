import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CandidatesDataEntry } from '../../types/CandidatesDataEntry';

export type Filters = {
    name: CandidatesDataEntry['name'];
    status: CandidatesDataEntry['status'] | '';
    positionApplied: CandidatesDataEntry['position_applied'];
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

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CandidatesDataEntry } from '../../types/CandidatesDataEntry';
import { PERSISTED_STORE_DATA } from '../../const/persistedStoreData';

export type Filters = {
    name: CandidatesDataEntry['name'];
    status: CandidatesDataEntry['status'] | '';
    positionApplied: CandidatesDataEntry['positionApplied'];
};

const initialState: Filters = {
    name: PERSISTED_STORE_DATA.name,
    status: PERSISTED_STORE_DATA.status,
    positionApplied: PERSISTED_STORE_DATA.positionApplied,
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

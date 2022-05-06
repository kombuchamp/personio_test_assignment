import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light';

const persistedTheme = localStorage.getItem('theme');

const initialState = {
    theme: getTheme(persistedTheme),
};

export const themeSlice = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;

function getTheme(theme: unknown): Theme | undefined {
    if (theme === 'light' || theme === 'dark') {
        return theme;
    }
    return 'light';
}

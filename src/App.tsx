import React from 'react';
import { ThemeProvider } from '@mui/material';
import { DARK_THEME, LIGHT_THEME } from './const/themes';
import { useTypedSelector } from './hooks/redux-helpers';

function App() {
    const { theme } = useTypedSelector((state) => state.themeReducer);

    return (
        <ThemeProvider theme={theme === 'light' ? LIGHT_THEME : DARK_THEME}>
            <div>it works</div>
        </ThemeProvider>
    );
}

export default App;

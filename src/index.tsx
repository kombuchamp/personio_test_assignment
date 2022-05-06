import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { App } from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    </React.StrictMode>
);

import { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export const LoadingOverlay: FC = () => {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open
        >
            <CircularProgress />
        </Backdrop>
    );
};

import { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

/**
 * Overlay that is shown when content is loading
 *
 * @constructor
 */
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

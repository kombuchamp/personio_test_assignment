import React, { FC } from 'react';
import { useCandidatesData } from '../../services/API';
import { Grid, Paper, Typography } from '@mui/material';
import { LoadingOverlay } from '../LoadingOverlay';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import { NETWORK_ERROR_TEXT } from '../../const/texts';
import { CandidatesDataGrid } from '../CandidatesDataGrid';
import { useTypedSelector } from '../../hooks/redux-helpers';
import { useDebounced } from '../../hooks/useDebounced';

/**
 * Main content of the application
 *
 * @constructor
 */
export const Content: FC = () => {
    const { data, isLoading, isError } = useCandidatesData();

    const filters = useDebounced(
        useTypedSelector((store) => store.filtersReducer),
        500
    );
    const sorting = useTypedSelector((store) => store.sortingReducer);

    if (isLoading) {
        return <LoadingOverlay />;
    }

    if (isError || data === undefined) {
        // NOTE: for simplicity I just put network error here, it could be more concrete
        return (
            <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                    <Typography variant={'h4'} component={'h2'} color={'error'}>
                        {NETWORK_ERROR_TEXT}
                    </Typography>
                </Grid>
                <Grid item>
                    <SignalWifiStatusbarConnectedNoInternet4Icon
                        onClick={() => window.location.reload()}
                        fontSize={'large'}
                        color={'error'}
                        cursor={'pointer'}
                    />
                </Grid>
            </Grid>
        );
    }
    return (
        <Paper
            elevation={3}
            sx={{
                flexGrow: 1,
                flexShrink: 1,
                mx: 1,
                padding: 2,
                width: '100%',
                overflow: 'auto',
            }}
        >
            <CandidatesDataGrid
                data={data}
                filters={filters}
                sorting={sorting}
            />
        </Paper>
    );
};

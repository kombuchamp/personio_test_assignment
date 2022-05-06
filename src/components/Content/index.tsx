import React, { FC } from 'react';
import { useCandidatesData } from '../../services/API';
import { Grid, Paper, Typography } from '@mui/material';
import { LoadingOverlay } from '../LoadingOverlay';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import { NETWORK_ERROR_TEXT } from '../../const/texts';
import { CandidatesDataGrid } from '../DataGrid';

export const Content: FC = () => {
    const { data, isLoading, isError } = useCandidatesData();

    if (isLoading) {
        return <LoadingOverlay />;
    }

    if (isError || data === undefined) {
        // NOTE: for simplicity I just put network error there.
        // TODO: display concrete error here

        return (
            <Grid container direction={'column'} alignItems={'center'}>
                <Grid item>
                    <Typography variant={'h4'} component={'h2'} color={'error'}>
                        {NETWORK_ERROR_TEXT}
                    </Typography>
                </Grid>
                <Grid item>
                    <SignalWifiStatusbarConnectedNoInternet4Icon
                        fontSize={'large'}
                        color={'error'}
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
            <CandidatesDataGrid data={data} />
        </Paper>
    );
};

import React, { FC } from 'react';
import { API } from '../../services/API';
import { Grid } from '@mui/material';

export const Content: FC = () => {
    // NOTE: RTK Query caches requests internally. Object "data" has persistent reference
    const { isLoading, isError, data } = API.useFetchTableDataQuery();

    if (isLoading) {
        return <div>loading</div>;
    }

    if (isError || data === undefined) {
        return <div>some error</div>;
    }
    return (
        <Grid container>
            {data.data.map((val) => (
                <Grid item sx={{ p: 1 }} xs={12}>
                    <pre>{JSON.stringify(val, null, 2)}</pre>
                </Grid>
            ))}
        </Grid>
    );
};

import React, { FC } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux-helpers';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { Filters, setFilters } from '../../store/reducers/Filters';
import { Status } from '../../types/Status';
import { EMPTY_FILTER_TEXT } from '../../const/texts';

const STATUS_FILTERS: Filters['status'][] = [
    '',
    'rejected',
    'approved',
    'waiting',
];

/**
 * Component for setting filters
 *
 * @constructor
 */
export const TableFilters: FC = () => {
    const dispatch = useTypedDispatch();
    const { positionApplied, status, name } = useTypedSelector(
        (state) => state.filtersReducer
    );

    return (
        <Paper
            elevation={3}
            sx={{
                flexGrow: 1,
                mx: 1,
                padding: 2,
            }}
        >
            <Typography variant={'h5'} component={'h2'} mb={1}>
                Filters
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                    <TextField
                        id={'name-filter'}
                        label={'Name'}
                        variant={'outlined'}
                        size={'small'}
                        fullWidth
                        value={name}
                        onChange={(e) => {
                            dispatch(setFilters({ name: e.target.value }));
                        }}
                    />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <TextField
                        id={'position-filter'}
                        label={'Applied position'}
                        variant={'outlined'}
                        size={'small'}
                        fullWidth
                        value={positionApplied}
                        onChange={(e) => {
                            dispatch(
                                setFilters({ positionApplied: e.target.value })
                            );
                        }}
                    />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <FormControl fullWidth size={'small'}>
                        <InputLabel id={'status-filter'}>Status</InputLabel>
                        <Select
                            label={'Status'}
                            labelId={'status-filter'}
                            value={status}
                            onChange={(e) => {
                                dispatch(
                                    setFilters({
                                        status: e.target.value as Status,
                                    })
                                );
                            }}
                        >
                            {STATUS_FILTERS.map((status) => (
                                <MenuItem key={status} value={status}>
                                    {status || EMPTY_FILTER_TEXT}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>
    );
};

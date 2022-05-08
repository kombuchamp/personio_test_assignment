import { Grid, Typography, Switch } from '@mui/material';
import { FC } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux-helpers';
import { setTheme } from '../../store/reducers/Theme';

/**
 * Switcher element for changing theme
 *
 * @constructor
 */
export const ThemeSwitcher: FC = () => {
    const { theme } = useTypedSelector((store) => store.themeReducer);
    const dispatch = useTypedDispatch();

    return (
        <Grid container alignItems={'center'}>
            <Typography>☀️</Typography>
            <Switch
                title={'toggles light and dark theme'}
                color={'secondary'}
                checked={theme !== 'light'}
                onChange={(e) => {
                    const theme = e.target.checked ? 'dark' : 'light';
                    dispatch(setTheme(theme));
                }}
            />
            <Typography>🌙</Typography>
        </Grid>
    );
};

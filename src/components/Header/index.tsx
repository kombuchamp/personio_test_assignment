import React, { FC } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { HEADER_TEXT } from '../../const/texts';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header: FC = () => {
    return (
        <AppBar position={'static'}>
            <Toolbar>
                <PersonIcon
                    sx={{
                        mr: 2,
                    }}
                />
                <Typography variant={'h6'} component={'h1'}>
                    {HEADER_TEXT}
                </Typography>
                <Box sx={{ ml: 'auto' }}>
                    <ThemeSwitcher />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

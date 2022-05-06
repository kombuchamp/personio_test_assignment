import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { HEADER_TEXT } from '../../const/texts';

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
            </Toolbar>
        </AppBar>
    );
};

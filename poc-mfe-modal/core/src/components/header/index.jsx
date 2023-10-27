import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = ({ title = "no title defined" }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

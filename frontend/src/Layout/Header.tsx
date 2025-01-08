import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
    <AppBar position="sticky" style={{ backgroundColor: '#34495E' }}>
        <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
                Order Management
            </Typography>
         
        </Toolbar>
    </AppBar>
);

export default Header;

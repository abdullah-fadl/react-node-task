import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer: React.FC = () => (
    <div style={{ backgroundColor: '#34495E', color: 'white', padding: '10px' }}>
        <Container>
            <Typography variant="body2" align="center">
                &copy; 2025 My React App. All Rights Reserved.
            </Typography>
        </Container>
    </div>
);

export default Footer;

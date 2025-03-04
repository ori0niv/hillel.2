import React from 'react';
import { Container, Typography } from '@mui/material';

function AboutPage() {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                About
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Container>
    );
}

export default AboutPage;
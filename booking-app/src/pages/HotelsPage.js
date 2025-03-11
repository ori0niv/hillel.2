// src/pages/HotelsPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

function HotelsPage() {
    const { hotels } = useSelector((state) => state.hotels);

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Hotels
            </Typography>
            <Grid container spacing={2}>
                {hotels.map((hotel) => (
                    <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                        <Paper sx={{ p: 2, textAlign: 'center' }}>
                            <Box sx={{ width: '100%', height: 140, backgroundColor: '#ddd', mb: 2 }}>
                                <Typography sx={{ pt: 5, color: '#888' }}>140 x 140</Typography>
                            </Box>
                            <Typography variant="h6">{hotel.name}</Typography>
                            <Typography variant="body2">
                                address: {hotel.address}
                            </Typography>
                            <Typography variant="body2">
                                city: {hotel.city}, state: {hotel.state}, country_code: {hotel.country_code}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default HotelsPage;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { TextField, Button, Box, Typography, Autocomplete, Container } from '@mui/material';
import { fetchDestinationsAsync } from '../redux/slices/destinationsSlice';
import { fetchHotelsAsync } from '../redux/slices/hotelsSlice';

const validate = (values) => {
    const errors = {};
    if (!values.destination) {
        errors.destination = 'Обязательное поле';
    }
    if (!values.checkIn) {
        errors.checkIn = 'Обязательное поле';
    }
    if (!values.checkOut) {
        errors.checkOut = 'Обязательное поле';
    }
    return errors;
};

function MainPage() {
    const dispatch = useDispatch();
    const { destinations, loading, error } = useSelector((state) => state.destinations);

    useEffect(() => {
        dispatch(fetchDestinationsAsync());
    }, [dispatch]);

    console.log('Destinations state:', { destinations, loading, error });

    if (loading) return <Typography>Загрузка...</Typography>;
    if (error) return <Typography>Ошибка: {error}</Typography>;

    const mockDestinations = destinations.length ? destinations : ["New York", "Chicago", "Los Angeles"];

    return (
        <Container sx={{ mt: 4 }}>
            <Form
                onSubmit={(values) => dispatch(fetchHotelsAsync(values))}
                validate={validate}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', gap: 2, mb: 4, p: 2, backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: 2 }}>
                            <Field name="destination">
                                {({ input, meta }) => (
                                    <Autocomplete
                                        {...input}
                                        options={mockDestinations} // Используем заглушку
                                        getOptionLabel={(option) =>
                                            typeof option === 'string' ? option : option.label || option.value || ''
                                        }
                                        onChange={(event, value) => {
                                            const newValue = typeof value === 'string' ? value : value?.value || value?.label || '';
                                            input.onChange(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Destination"
                                                error={meta.touched && meta.error}
                                                helperText={meta.touched && meta.error}
                                                sx={{ minWidth: 200 }}
                                            />
                                        )}
                                    />
                                )}
                            </Field>
                            <Field name="checkIn">
                                {({ input, meta }) => (
                                    <TextField
                                        {...input}
                                        type="date"
                                        label="Check in"
                                        InputLabelProps={{ shrink: true }}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                        sx={{ minWidth: 200 }}
                                    />
                                )}
                            </Field>
                            <Field name="checkOut">
                                {({ input, meta }) => (
                                    <TextField
                                        {...input}
                                        type="date"
                                        label="Check out"
                                        InputLabelProps={{ shrink: true }}
                                        error={meta.touched && meta.error}
                                        helperText={meta.touched && meta.error}
                                        sx={{ minWidth: 200 }}
                                    />
                                )}
                            </Field>
                            <Field name="adults">
                                {({ input }) => (
                                    <TextField
                                        {...input}
                                        type="number"
                                        label="Adults"
                                        sx={{ minWidth: 100 }}
                                    />
                                )}
                            </Field>
                            <Field name="children">
                                {({ input }) => (
                                    <TextField
                                        {...input}
                                        type="number"
                                        label="Children"
                                        sx={{ minWidth: 100 }}
                                    />
                                )}
                            </Field>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ backgroundColor: '#ff9800', textTransform: 'uppercase' }}
                                disabled={submitting || pristine}
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                )}
            />
            <Typography variant="h4" sx={{ color: '#ff9800', mb: 2 }}>
                Travel With Booking
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </Container>
    );
}

export default MainPage;
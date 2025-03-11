import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDestinations } from '../../services/api';

export const fetchDestinationsAsync = createAsyncThunk(
    'destinations/fetchDestinations',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetchDestinations();
            console.log('Fetched destinations:', response); // Для отладки
            return response;
        } catch (error) {
            console.error('Error fetching destinations:', error.message); // Для отладки
            return rejectWithValue(error.message);
        }
    }
);

const destinationsSlice = createSlice({
    name: 'destinations',
    initialState: {
        destinations: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDestinationsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDestinationsAsync.fulfilled, (state, action) => {
                state.destinations = action.payload;
                state.loading = false;
            })
            .addCase(fetchDestinationsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default destinationsSlice.reducer;
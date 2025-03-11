import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHotels } from '../../services/api';
import { push } from 'redux-first-history';

export const fetchHotelsAsync = createAsyncThunk(
    'hotels/fetchHotels',
    async (formData, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetchHotels(formData);
            dispatch(push('/hotels')); // Редирект на страницу отелей после успешного запроса
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: {
        hotels: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotelsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHotelsAsync.fulfilled, (state, action) => {
                state.hotels = action.payload;
                state.loading = false;
            })
            .addCase(fetchHotelsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default hotelsSlice.reducer;
export const fetchHotelsRequest = (formData) => ({
    type: 'FETCH_HOTELS_REQUEST',
    payload: formData,
});

export const fetchHotelsSuccess = (hotels) => ({
    type: 'FETCH_HOTELS_SUCCESS',
    payload: hotels,
});

export const fetchHotelsFailure = (error) => ({
    type: 'FETCH_HOTELS_FAILURE',
    payload: error,
});
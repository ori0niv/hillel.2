export const fetchDestinationsRequest = () => ({
    type: 'FETCH_DESTINATIONS_REQUEST',
});

export const fetchDestinationsSuccess = (destinations) => ({
    type: 'FETCH_DESTINATIONS_SUCCESS',
    payload: destinations,
});

export const fetchDestinationsFailure = (error) => ({
    type: 'FETCH_DESTINATIONS_FAILURE',
    payload: error,
});
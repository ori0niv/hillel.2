const initialState = {
    destinations: [],
    loading: false,
    error: null,
};

const destinationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DESTINATIONS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_DESTINATIONS_SUCCESS':
            return { ...state, destinations: action.payload, loading: false };
        case 'FETCH_DESTINATIONS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default destinationsReducer;
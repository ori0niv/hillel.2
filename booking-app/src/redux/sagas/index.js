import { takeEvery, call, put } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import { fetchDestinations, fetchHotels } from '../../services/api';
import {
    fetchDestinationsSuccess,
    fetchDestinationsFailure,
} from '../actions/destinationActions';
import {
    fetchHotelsSuccess,
    fetchHotelsFailure,
} from '../actions/hotelActions';

function* fetchDestinationsSaga() {
    try {
        const destinations = yield call(fetchDestinations);
        yield put(fetchDestinationsSuccess(destinations));
    } catch (error) {
        yield put(fetchDestinationsFailure(error.message));
    }
}

function* fetchHotelsSaga(action) {
    try {
        const hotels = yield call(fetchHotels, action.payload);
        yield put(fetchHotelsSuccess(hotels));
        yield put(push('/hotels'));
    } catch (error) {
        yield put(fetchHotelsFailure(error.message));
    }
}

export default function* rootSaga() {
    yield takeEvery('FETCH_DESTINATIONS_REQUEST', fetchDestinationsSaga);
    yield takeEvery('FETCH_HOTELS_REQUEST', fetchHotelsSaga);
}
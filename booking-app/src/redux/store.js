import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import destinationsReducer from './slices/destinationsSlice';
import hotelsReducer from './slices/hotelsSlice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

const store = configureStore({
    reducer: {
        router: routerReducer,
        destinations: destinationsReducer,
        hotels: hotelsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);
export default store;


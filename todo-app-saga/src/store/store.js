import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoReducer from '../features/todos/todoSlice';
import todoSaga from '../features/todos/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(todoSaga);

export default store;
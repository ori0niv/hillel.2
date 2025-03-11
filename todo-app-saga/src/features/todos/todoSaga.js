import { call, put, takeEvery } from 'redux-saga/effects';
import {
    loadTodosRequest,
    loadTodosSuccess,
    loadTodosFailure,
    addTodoRequest,
    addTodoSuccess,
    addTodoFailure,
    deleteTodoRequest,
    deleteTodoSuccess,
    deleteTodoFailure,
    toggleTodoRequest,
    toggleTodoSuccess,
    toggleTodoFailure,
    editTodoRequest,
    editTodoSuccess,
    editTodoFailure,
    clearTodosRequest,
    clearTodosSuccess,
    clearTodosFailure,
} from './todoSlice';

const fakeApi = {
    loadTodos: () =>
        new Promise((resolve) =>
            setTimeout(() => resolve([
                { id: 1, text: 'Learn Redux-Saga', completed: false },
                { id: 2, text: 'Build TODO App', completed: false },
            ]), 1000)
        ),
    addTodo: (text) =>
        new Promise((resolve) =>
            setTimeout(() => resolve({ id: Date.now(), text, completed: false }), 500)
        ),
    deleteTodo: (id) => new Promise((resolve) => setTimeout(() => resolve(id), 500)),
    toggleTodo: (id) => new Promise((resolve) => setTimeout(() => resolve(id), 500)),
    editTodo: ({ id, text }) =>
        new Promise((resolve) => setTimeout(() => resolve({ id, text }), 500)),
    clearTodos: () => new Promise((resolve) => setTimeout(() => resolve(), 500)),
};

function* loadTodosSaga() {
    try {
        const todos = yield call(fakeApi.loadTodos);
        yield put(loadTodosSuccess(todos));
    } catch (error) {
        yield put(loadTodosFailure(error.message));
    }
}

function* addTodoSaga(action) {
    try {
        const todo = yield call(fakeApi.addTodo, action.payload);
        yield put(addTodoSuccess(todo));
    } catch (error) {
        yield put(addTodoFailure(error.message));
    }
}

function* deleteTodoSaga(action) {
    try {
        yield call(fakeApi.deleteTodo, action.payload);
        yield put(deleteTodoSuccess(action.payload));
    } catch (error) {
        yield put(deleteTodoFailure(error.message));
    }
}

function* toggleTodoSaga(action) {
    try {
        yield call(fakeApi.toggleTodo, action.payload);
        yield put(toggleTodoSuccess(action.payload));
    } catch (error) {
        yield put(toggleTodoFailure(error.message));
    }
}

function* editTodoSaga(action) {
    try {
        yield call(fakeApi.editTodo, action.payload);
        yield put(editTodoSuccess(action.payload));
    } catch (error) {
        yield put(editTodoFailure(error.message));
    }
}

function* clearTodosSaga() {
    try {
        yield call(fakeApi.clearTodos);
        yield put(clearTodosSuccess());
    } catch (error) {
        yield put(clearTodosFailure(error.message));
    }
}

export default function* todoSaga() {
    yield takeEvery(loadTodosRequest.type, loadTodosSaga);
    yield takeEvery(addTodoRequest.type, addTodoSaga);
    yield takeEvery(deleteTodoRequest.type, deleteTodoSaga);
    yield takeEvery(toggleTodoRequest.type, toggleTodoSaga);
    yield takeEvery(editTodoRequest.type, editTodoSaga);
    yield takeEvery(clearTodosRequest.type, clearTodosSaga);
}
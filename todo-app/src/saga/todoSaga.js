import { call, put, takeEvery } from 'redux-saga/effects';

// Функція для отримання завдань (імітуємо запит до API)
const fetchTodosFromApi = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve([{ id: 1, text: "Learn Redux-Saga", completed: false }]), 1000)
    );

function* fetchTodos() {
    console.log("Fetching todos...");
    try {
        const todos = yield call(fetchTodosFromApi);
        console.log("Fetched todos:", todos);
        yield put({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
    } catch (error) {
        console.error("Fetch error:", error);
        yield put({ type: 'FETCH_TODOS_FAILURE', error });
    }
}


function* addTodo(action) {
    yield put({ type: 'ADD_TODO_SUCCESS', payload: action.payload });
}

function* deleteTodo(action) {
    yield put({ type: 'DELETE_TODO_SUCCESS', payload: action.payload });
}

function* toggleTodo(action) {
    yield put({ type: 'TOGGLE_TODO_SUCCESS', payload: action.payload });
}

function* editTodo(action) {
    yield put({ type: 'EDIT_TODO_SUCCESS', payload: action.payload });
}

function* clearTodos() {
    yield put({ type: 'CLEAR_TODOS_SUCCESS' });
}

export default function* todoSaga() {
    yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos);
    yield takeEvery('ADD_TODO_REQUEST', addTodo);
    yield takeEvery('DELETE_TODO_REQUEST', deleteTodo);
    yield takeEvery('TOGGLE_TODO_REQUEST', toggleTodo);
    yield takeEvery('EDIT_TODO_REQUEST', editTodo);
    yield takeEvery('CLEAR_TODOS_REQUEST', clearTodos);
}

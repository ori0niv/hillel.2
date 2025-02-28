import { call, put, takeEvery } from "redux-saga/effects";
import { fetchTodos, fetchTodosSuccess } from "./todoSlice";

// Функция-запрос для загрузки задач (эмулируем API)
const fetchTodosFromAPI = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Навчитися Redux-Saga", completed: false },
                { id: 2, text: "Зробити TODO-додаток", completed: true },
            ]);
        }, 1000);
    });
};


function* fetchTodosSaga() {
    const todos = yield call(fetchTodosFromAPI);
    yield put(fetchTodosSuccess(todos));
}


function* todoSaga() {
    yield takeEvery(fetchTodos.type, fetchTodosSaga);
}

export default todoSaga;

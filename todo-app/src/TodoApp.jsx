import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const formik = useFormik({
        initialValues: { task: "" },
        validationSchema: Yup.object({
            task: Yup.string()
                .min(5, "Мінімальна довжина 5 символів")
                .required("Поле обов'язкове"),
        }),
        onSubmit: (values, { resetForm }) => {
            setTodos([...todos, values.task]);
            resetForm();
        },
    });

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">TODO List</h2>
            <form onSubmit={formik.handleSubmit} className="mb-4">
                <input
                    type="text"
                    name="task"
                    placeholder="Введіть задачу..."
                    className="w-full p-2 border rounded"
                    {...formik.getFieldProps("task")}
                />
                {formik.touched.task && formik.errors.task ? (
                    <div className="text-red-500 text-sm">{formik.errors.task}</div>
                ) : null}
                <button
                    type="submit"
                    className="mt-2 w-full bg-blue-500 text-white py-2 rounded"
                >
                    Додати
                </button>
            </form>

            <ul className="list-disc pl-5">
                {todos.map((todo, index) => (
                    <li key={index} className="py-1 border-b">
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;

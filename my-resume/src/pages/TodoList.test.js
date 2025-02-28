import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import "@testing-library/jest-dom";

test("Сторінка має заголовок TODO", () => {
    render(<TodoList />);
    const heading = screen.getByText(/TODO/i);
    expect(heading).toBeInTheDocument();
});

test("Поле для вводу дозволяє вводити текст", () => {
    render(<TodoList />);
    const input = screen.getByLabelText(/Нове завдання/i);

    fireEvent.change(input, { target: { value: "Моє перше завдання" } });

    expect(input.value).toBe("Моє перше завдання");
});

test("Не додає пусте завдання у список", () => {
    render(<TodoList />);
    const button = screen.getByText(/Додати/i);

    fireEvent.click(button);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
});

test("Додає новий елемент у список після натискання на кнопку", () => {
    render(<TodoList />);
    const input = screen.getByLabelText(/Нове завдання/i);
    const button = screen.getByText(/Додати/i);

    fireEvent.change(input, { target: { value: "Купити хліб" } });
    fireEvent.click(button);

    const listItem = screen.getByText(/Купити хліб/i);
    expect(listItem).toBeInTheDocument();
});

test("Видаляє завдання після натискання на кнопку видалення", () => {
    render(<TodoList />);
    const input = screen.getByLabelText(/Нове завдання/i);
    const button = screen.getByText(/Додати/i);

    fireEvent.change(input, { target: { value: "Почати вчити тести" } });
    fireEvent.click(button);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Почати вчити тести/i)).not.toBeInTheDocument();
});

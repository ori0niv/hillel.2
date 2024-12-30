document.addEventListener('DOMContentLoaded', () => {
    const todoItems = document.querySelectorAll('.todo-item');
    const modalBody = document.getElementById('taskModalBody');
    const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));

    todoItems.forEach((item) => {
        item.addEventListener('click', () => {
            const taskText = item.dataset.task;
            modalBody.textContent = taskText;
            taskModal.show();
        });
    });
});

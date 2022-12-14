function markAllAsCompleted() {
    changeListElementState(true)
}

function markAllAsNotCompleted() {
    changeListElementState(false)
}

function changeListElementState(shouldBeCompleted) {
    const listElement = document.getElementById('tasks-list');
    const taskElements = listElement.children;
    for (let taskElement of taskElements) {
        if (shouldBeCompleted) {
            taskElement.classList.add('completed');
        } else {
            taskElement.classList.remove('completed');
        }
    }
}

function deleteTask(buttonElement) {
    // buttonElement.parentElement.remove();
    buttonElement.parentElement.style.display = 'none';
}

function toggleCompletedState(spanElement) {
    const taskElement = spanElement.parentElement;
    const isCompleted = taskElement.classList.contains('completed');
    if (isCompleted) {
        taskElement.classList.remove('completed');
    } else {
        taskElement.classList.add('completed');
    }
}

function submitForm(submitEvent) {
    submitEvent.preventDefault();
    const taskNameInput = document.getElementById('new-task-name');
    const taskName = taskNameInput.value;
    if (taskName === '') {
        alert('Please fill in the task');
        return false;
    }
    const isCompleted = document.getElementById('is-completed-select').value;
    // let isCompletedClass = '';
    // if (isCompleted === '1') {
    //     isCompletedClass = 'completed';
    // } else {
    //     isCompletedClass = '';
    // }

    const isCompletedClass = isCompleted === '1' ? 'completed' : '';

    const newTaskString = `
        <li class="${isCompletedClass}">
            <span onclick="toggleCompletedState(this)">${taskName}</span>
            <button onclick="deleteTask(this)">X</button>
        </li>
    `;

    const listElement = document.getElementById('tasks-list');
    listElement.innerHTML += newTaskString; // innerText would show all code
    taskNameInput.value = '';
}
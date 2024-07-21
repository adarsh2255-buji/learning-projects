const inputTask = document.querySelector('.input-task');
const btnAddTask = document.querySelector('.btn-add-task');
const displayTask = document.querySelector('.display-task');
const taskDueDate = document.querySelector('.task-due-date');

const tasks = [];

//ADD TASK
function addTask(){
    let inputAddedTask = inputTask.value;
    let inputTaskDueDate = taskDueDate.value;
    inputTask.value = '';
    tasks.push({
        taskName : inputAddedTask,
        dueDate : inputTaskDueDate
    });
    displayTasks()
}

//DISPLAY TASKS
function displayTasks(){
    let taskList = '';
    for(let i=0; i<tasks.length; i++) {
        const todo = tasks[i];
        const {taskName, dueDate} = todo
        const html = `
        <li class="task-list">
        <span>${taskName}</span>
        <span> ${dueDate}</span>
        <button class="btn-delete"
        onclick = "tasks.splice(${i}, 1);
        displayTasks(); "
        >delete</button>
        </li>`;
        taskList += html
    }
    displayTask.innerHTML = taskList;
}


// ADDEVENTLISTNERS
btnAddTask.addEventListener('click',addTask);

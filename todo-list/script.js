const inputTask = document.querySelector('.input-task');
const btnAddTask = document.querySelector('.btn-add-task');
const displayTask = document.querySelector('.display-task');

const tasks = []

function addTask(){
    inputAddedTask = inputTask.value;
    inputTask.value = '';
    tasks.push(inputAddedTask);
    displayTasks()
    console.log(tasks) 
}
function displayTasks(){
    let taskList = '';
    for(let i=0; i<tasks.length; i++) {
        const todo = tasks[i];
        const html = `<p>${todo}</p>`;
        taskList += html
    }
    displayTask.innerHTML = taskList;
}
btnAddTask.addEventListener('click',addTask);

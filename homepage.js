const add = document.getElementById('ad');
const list = document.getElementById('to-do_list');
const input = document.getElementById('task')

add.addEventListener("click", addtask);

function addtask() {
    const  taskText = task.value.trim();

    if (taskText == ''){
        alert("Sorry the task input feild can't be empty");
    }

    const taskItems = document.createElement('li');
    taskItems.className = 'task-item';
}
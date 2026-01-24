const add = document.getElementById('ad');
const list = document.getElementById('to-do_list');
const input = document.getElementById('task');


function addtask() {
    const  taskText = input.value.trim();
    let val = true;
    if (taskText == ''){
        alert("Sorry the task input field can't be empty");
        val = false;
    }
    
    const taskItems = document.createElement('li');
    taskItems.className = 'task-item';
    list.appendChild(taskItems);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'box'
    
    checkbox.addEventListener('change', function(){
        if(this.checked){
            taskItems.classList.add('completed');
        }
        else{
            taskItems.classList.remove('completed');
        }
    })
    taskItems.appendChild(checkbox);
    
    
    
    const spanText = document.createElement('text');
    spanText.className = 'input-text';
    spanText.textContent = taskText;
    taskItems.appendChild(spanText);
    
    
  
}

input.value = '';
add.addEventListener('click', addtask);
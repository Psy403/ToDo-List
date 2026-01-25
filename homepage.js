const add = document.getElementById('ad');
const list = document.getElementById('to-do_list');
const input = document.getElementById('task');


function addtask() {
    const  taskText = input.value.trim();
    if (taskText == ''){
        alert("Sorry the task input field can't be empty");
         return false;
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
    
    
    
    const spanText = document.createElement('span');
    spanText.className = 'input-text';
    spanText.textContent = taskText;
    taskItems.appendChild(spanText);
    
    input.value = '';



    const closee = document.createElement('button');
    closee.className = 'close-btn';
    closee.textContent = 'X'
    taskItems.appendChild(closee);
    
    closee.addEventListener('click', function(){
        list.removeChild(taskItems);
    });


    // const edit = document.createElement('button');
    // edit.className = 'edit'
    // edit.textContent = 'Edit'
    // edit.type = 'input'
    // taskItems.appendChild(edit);
    
    
    // edit.addEventListener('click', function(){
        
        
    // });

}

add.addEventListener('click', addtask);


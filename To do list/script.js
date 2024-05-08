function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        var taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;
        taskItem.onclick = function() {
            this.classList.toggle('completed');
            if (this.classList.contains('completed')) {
                this.setAttribute('data-done', 'true');
            } else {
                this.setAttribute('data-done', 'false');
            }
        };
        taskList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('Lütfen bir görev girin!');
    }
}

function clearList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Liste içeriğini temizle
}

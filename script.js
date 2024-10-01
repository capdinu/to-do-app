function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();    if (taskText !== "") {
        createTaskElement(taskText);        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));        taskInput.value = "";
    }
}function createTaskElement(taskText) {
    const li = document.createElement('li');
    const taskNode = document.createTextNode(taskText);
    const deleteButton = document.createElement('button');    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
        deleteTask(li, taskText);
    };    li.appendChild(taskNode);
    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
}function deleteTask(taskItem, taskText) {
    document.getElementById('taskList').removeChild(taskItem);    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}window.onload = function() {
    loadTasks();
};
function add(a, b) {
    console.log(a);
    console.log(b);}
    add( 3, 5);



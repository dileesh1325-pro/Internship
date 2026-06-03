let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
        <li>
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        </li>`;
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if(input.value !== ""){
        tasks.push(input.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        displayTasks();
    }
}

function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

displayTasks();
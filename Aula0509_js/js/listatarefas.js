document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);
    taskList.addEventListener('change', handleCheckboxChange);

    function addTask() {
        const taskText = taskInput.value.trim(); /* trim remove os espaços antes e depois do valor de input */
        if (taskText === '') return;

        const taskItem = document.createElement('li'); /* createElement adiciona o elemento ao HTML */

        // Criando o checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox'); /* classList.add adiciona uma classe a elemento */

        // Adicionando o texto da tarefa
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        // Criando o botão de excluir
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir'; /* adiciona texto ao elemento criado*/
        deleteBtn.classList.add('delete-btn');

        // Adicionando checkbox, texto e botão ao item da lista
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteBtn);

        // Adicionando o item de tarefa à lista
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    // Função para lidar com o botão de exclusão e marcar/desmarcar como concluída
    function handleTaskAction(event) {
        if (event.target.classList.contains('delete-btn')) {
            // Se for clicado o botão de excluir, remove a tarefa
            const taskItem = event.target.parentElement;
            taskList.removeChild(taskItem);
        }
    }

    // Função para lidar com a ação de marcar/desmarcar como concluída
    function handleCheckboxChange(event) {
        if (event.target.classList.contains('task-checkbox')) {
            // Se for clicado o checkbox, marca ou desmarca a tarefa como concluída
            const taskItem = event.target.parentElement;
            taskItem.classList.toggle('completed');
        }
    }

    // Função para filtrar as tarefas
    function filterTasks(filter) {
        const tasks = taskList.querySelectorAll("li");
        tasks.forEach(task => {
            switch (filter) {
                case "all":
                    task.style.display = "flex";
                    break;
                case "pending":
                    if (task.classList.contains("completed")) {
                        task.style.display = "none";
                    } else {
                        task.style.display = "flex";
                    }
                    break;
                case "completed":
                    if (task.classList.contains("completed")) {
                        task.style.display = "flex";
                    } else {
                        task.style.display = "none";
                    }
                    break;
            }
        });
    }

    // Eventos de clique nos btns de filtro
    document.getElementById("filter-all").addEventListener("click", () => filterTasks("all"));
    document.getElementById("filter-pending").addEventListener("click", () => filterTasks("pending"));
    document.getElementById("filter-completed").addEventListener("click", () => filterTasks("completed"));
});
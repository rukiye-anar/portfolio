document.addEventListener("DOMContentLoaded", () => {
  function todoList() {
    const addButton = document.getElementById("add-button");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const deleteAll = document.getElementById("delete-all");
    const modal = document.getElementById("confirm-modal");
    const confirmYes = document.getElementById("confirm-yes");
    const confirmNo = document.getElementById("confirm-no");
    let tasks = [];
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      tasks = storedTasks;
      tasks.forEach(function (task) {
        createTaskElement(task);
      });
    }
    function createTaskElement(task) {
      const li = document.createElement("li");
      const taskSpan = document.createElement("span");
      taskSpan.textContent = task.text;
      taskSpan.style.marginLeft = "5px";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      if (task.completed) {
        taskSpan.style.textDecoration = "line-through";
        taskSpan.style.color = "gray";
      }
      checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        if (task.completed) {
          taskSpan.style.textDecoration = "line-through";
          taskSpan.style.color = "gray";
        } else {
          taskSpan.style.textDecoration = "none";
          taskSpan.style.color = "black";
        }
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Sil";
      deleteButton.addEventListener("click", function () {
        li.remove();
        tasks = tasks.filter((t) => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      });

      li.appendChild(checkbox);
      li.appendChild(taskSpan);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    }

    addButton.addEventListener("click", function () {
      const taskText = todoInput.value.trim();
      if (taskText !== "") {
        const newTask = { text: taskText, completed: false };
        createTaskElement(newTask);
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        todoInput.value = "";
      }
    });

    deleteAll.addEventListener("click", function () {
      if (todoList.innerHTML != "") {
        modal.style.display = "block";
      }
    });
    confirmYes.addEventListener("click", () => {
      todoList.innerHTML = "";
      tasks = [];
      localStorage.removeItem("tasks");
      modal.style.display = "none";
    });
    confirmNo.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
  todoList();
});

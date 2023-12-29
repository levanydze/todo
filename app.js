// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

const selAll = document.querySelector("#all");
const selcomp = document.querySelector("#completed");
const seluncomp = document.querySelector("#uncompleted");

//Events Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
// selComp.addEventListener("click", filterTodo);
// selAll.addEventListener("click", filterTodo);
// selUncomp.addEventListener("click", filterTodo);
// console.log(filterOption.option.value.all);

//Functions
function addTodo(event) {
  //prevet by refreshing
  event.preventDefault();
  if (todoInput.value !== "") {
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //check mark button  const compleatedButton

    const compleatedButton = document.createElement("button");
    compleatedButton.innerHTML = '<i class="fa fa-check"></i>';
    compleatedButton.classList.add("complete-btn");
    todoDiv.appendChild(compleatedButton);

    //create trash

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //appendchildren
    todoList.appendChild(todoDiv);
    //refreshing input
    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] == "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function (e) {
      todo.remove();
    });
    // item.parentElement.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const prnt = item.parentElement;
    prnt.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

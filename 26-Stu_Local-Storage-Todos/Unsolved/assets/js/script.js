var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// This function is used to render the todos to the page
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // The innerHTML property sets or returns the HTML content (inner HTML) of an element.
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // The for loop is used to loop through the todos array and create a new li element for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// This function is used to initialize the page by rendering our todos to the page
function init() {
  // TODO: What is the purpose of the following line of code?
  // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // The if statement checks if the storedTodos is not equal to null, if it is not equal to null then the todos array is set to the storedTodos
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // This line of code calls the renderTodos function
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // The JSON.stringify() method converts a JavaScript object or value to a JSON string
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// The following line of code is an event listener that listens for the submit event on the todoForm
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // The if statement checks if the todoText is equal to an empty string, if it is then it returns out of the function
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  // The following lines of code adds the todoText to the todos array and sets the todoInput value to an empty string
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // The storeTodos function is called to store the todos array to local storage and the renderTodos function is called to render the todos to the page
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// The following line of code is an event listener that listens for the click event on the todoList
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // The if statement checks if the element that was clicked is a button, if it is then it removes the todo from the todos array and calls the storeTodos and renderTodos functions
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // The storeTodos function is called to store the todos array to local storage and the renderTodos function is called to render the todos to the page
    storeTodos();
    renderTodos();
  }
});

init();

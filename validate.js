// Select necessary DOM elements
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTodo() {
    const todoText = todoInput.value.trim();

    // Validate the input: make sure it's not empty
    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new list item (li) for the task
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    // Add task text to the new list item
    todoItem.innerHTML = `
        <span>${todoText}</span>
        <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
    `;

    // Add the new item to the to-do list
    todoList.appendChild(todoItem);

    // Clear the input field
    todoInput.value = '';
}

// Function to delete a task
function deleteTodo(button) {
    const todoItem = button.parentElement;
    todoList.removeChild(todoItem);
}

// Event listener for the "Add" button
addButton.addEventListener('click', addTodo);

// Allow pressing Enter key to add task
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

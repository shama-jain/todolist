document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput'); // Get the task input element
    const taskText = taskInput.value; // Get the text entered by the user

    if (taskText === '') { // Check if the input is empty
        alert('Please enter a task.');
        return; // Exit the function if no task is entered
    }

    const li = document.createElement('li'); // Create a new list item (li) element
    li.innerText = taskText; // Set the text of the list item to the user's input

    // Add click event to toggle the 'completed' class on and off
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    // Add event listener to delete the task when the button is clicked
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn); // Append the delete button to the list item
    document.getElementById('taskList').appendChild(li); // Append the list item to the task list

    taskInput.value = ''; // Clear the input field for the next task
});
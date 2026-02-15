const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskName = document.querySelector('input[name="task"]').value;

    fetch('https://your-app-name.herokuapp.com/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: taskName })
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
    })
    .catch(error => console.error('Error:', error));
});

document.querySelectorAll('.toggle-task').forEach(item => {
    item.addEventListener('click', function(event) {
        const taskId = item.getAttribute('data-task-id');
        fetch(`https://your-app-name.herokuapp.com/toggle/${taskId}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            location.reload();
        })
        .catch(error => console.error('Error:', error));
    });
});


document.querySelectorAll('.delete-task').forEach(item => {
    item.addEventListener('click', function(event) {
        const taskId = item.getAttribute('data-task-id');
        fetch(`https://your-app-name.herokuapp.com/delete/${taskId}`, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            location.reload();
        })
        .catch(error => console.error('Error:', error));
    });
});

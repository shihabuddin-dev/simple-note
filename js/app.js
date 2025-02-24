document.getElementById('ol-list')
.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

// Add new item to the list
document.getElementById('btn-add')
.addEventListener('click', function () {
    const input = document.getElementById('input-item');
    const newItemText = input.value.trim();
    if (newItemText) {
        const ol = document.getElementById('ol-list');
        const li = document.createElement('li');
        li.classList.add('text-xl', 'text-gray-800', 'p-2', 'rounded-lg', 'cursor-pointer');
        li.textContent = newItemText;
        ol.appendChild(li);
        input.value = ''; // Clear the input field
    }
});
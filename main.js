let input = document.getElementById('txtInput');
let btn = document.getElementById('btn');
let ul = document.getElementById('list');

// Create a list item on button press
btn.addEventListener('click', function() {
    let newItem = document.createElement('li');
    newItem.innerText = input.value;
    ul.appendChild(newItem);
    input.value = '';

    // Mark selected item done
    newItem.addEventListener('click', function() {
        newItem.style.backgroundColor = 'green';
    })
    // Delete item from list
    newItem.addEventListener('dblclick', function() {
        ul.removeChild(newItem);
    })
})
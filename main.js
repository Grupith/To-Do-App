let input = document.getElementById('txtInput');
let btn = document.getElementById('btn');
let ul = document.getElementById('list');
let allListItems = document.querySelectorAll('li');
let clearAllBtn = document.getElementById('clearAllBtn');

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
    // Clear all list items on button press
    clearAllBtn.addEventListener('click', function(){
        ul.removeChild(newItem);
    })
})

// Create a list item on Enter
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let newItemOnEnter = document.createElement('li');
        ul.appendChild(newItemOnEnter);
        newItemOnEnter.innerText = input.value;
        input.value = '';

        newItemOnEnter.addEventListener('click', function() {
            newItemOnEnter.style.backgroundColor = 'green';
        })

        newItemOnEnter.addEventListener('dblclick', function() {
            ul.removeChild(newItemOnEnter);
        })
        // Clear all list items on Enter
        clearAllBtn.addEventListener('click', function(){
            ul.removeChild(newItemOnEnter);
        })
    }
})


// add checkbox to item
// add x button to delete list item from list
// add quetion mark and make hint animate to appear on hover 

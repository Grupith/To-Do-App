let input = document.getElementById('txtInput');
let ul = document.getElementById('list');
let clearAllBtn = document.getElementById('clearAllBtn');

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
        clearAllBtn.addEventListener('click', function() {
            ul.removeChild(newItemOnEnter);
        })
       
    }
})


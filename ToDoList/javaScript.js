let button = document.getElementById('button');
let list = document.getElementById('ul');

button.addEventListener('click', function (event) {
    event.preventDefault();
    
    if (document.getElementById('input').value !== '') {
        let text = document.getElementById('input').value;
        let item = document.createElement('span');
        item.classList.add('item');
        
        item.innerHTML = `
            <span id='task'>
                <span id='item'>
                    <input type='checkbox' class='check'/>
                    <label>${text}</label>
                </span>
                <span>
                    <button class='btn-del'>del</button>
                </span>
            </span>`
        
        list.appendChild(item);
    }
    
    document.getElementById('input').value = '';
});

list.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-del')) {
        event.target.parentElement.parentElement.remove();
    } else if (event.target.classList.contains('check')) { 
        if (event.target.checked) {
            let taskText = event.target.nextElementSibling.textContent;
            addToTable(taskText);
            event.target.parentElement.parentElement.remove();
        }
    }
});

function addToTable(task) {
    let tableBody = document.getElementById('infoTableBody');
    let newRow = tableBody.insertRow();
    let cell = newRow.insertCell(0);
    cell.innerHTML = task;
}

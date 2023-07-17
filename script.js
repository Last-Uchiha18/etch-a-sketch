let container = document.querySelector('.container')
let height = 400 / 16;
let width = 400 / 16;
for(let i = 0; i < 16; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row-div');
    for(let j = 0; j < 16; j++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('column-div');
        columnDiv.style.height = height + 'px';
        columnDiv.style.width = width + 'px';
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
}


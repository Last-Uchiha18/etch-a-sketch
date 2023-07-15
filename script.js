let container = document.querySelector('.container')
for(let i = 0; i < 16; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.style.cssText = 'width: 256px; height: 16px;';
    rowDiv.classList.add('row-div');
    for(let j = 0; j < 16; j++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('column-div');
        columnDiv.style.cssText = 'width: 16px; height: 16px; color: white';
        columnDiv.textContent = "a";
        rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
}


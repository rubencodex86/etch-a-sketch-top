const container = document.querySelector('.container');

function createGrid(size) {

    const totalSize = 700; // total size of the container in pixels
    const cellSize = totalSize / size; // calculate the size of each cell

    for( let i= 0; i < size; i++) {
        const divRow = document.createElement('div');
        container.append(divRow);
        divRow.setAttribute('class', 'row');

        for( let j= 0; j < size; j++) {
            const divCol = document.createElement('div');
            divRow.append(divCol);
            divCol.setAttribute('class', 'col');
            divCol.style.width = `${cellSize}px`; // set the width of each cell
            divCol.style.height = `${cellSize}px`;
        }
    }

    const highlight = document.querySelectorAll('.col');

    highlight.forEach((square) => {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'red';
        })
    })
}

createGrid(16);

const btn = document.getElementById('grid-size-btn')

btn.addEventListener('click', function(){
    let size = prompt('Enter size');
    size = parseInt(size);
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    container.innerHTML = null;
    createGrid(size);
})

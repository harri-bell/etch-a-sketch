const sketchContainer = document.querySelector('.sketch-container');
const setSquaresBtn = document.querySelector('.set-squares-btn');

function setupGrid(size) {
  sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${size}), 1fr`;
  for (let i = 0; i < (size * size); i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    sketchContainer.appendChild(gridElement);
  }
}

function setSquareCount() {
  clearGrid();
  let squareCount = prompt('how many squares', '');
  if (squareCount <= 100) {
    return setupGrid(squareCount)
  } else {
    return alert('too big, try 100 or less');
  };
}

function clearGrid() {
  sketchContainer.innerHTML = '';
}

setSquaresBtn.addEventListener('click', setSquareCount)

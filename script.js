const sketchContainer = document.querySelector('.sketch-container');


function setupGrid(size) {
  sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${size}), 1fr`;
  for (let i = 0; i < (size * size); i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    sketchContainer.appendChild(gridElement);
  }

}


setupGrid(4);

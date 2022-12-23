const container = document.querySelector('.container');
let rainbowPick = false;
let counter = 0;

gridSize = 16;
// Setting initial grid size of 16
paintGrid(gridSize);


//Waiting for clicks on resize/rainbow mode buttons
const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', changeState)
const resize = document.querySelector('.resize');
resize.addEventListener('click', () => {
    while (true) {
        gridSize = prompt('Enter the grid size (1-100):');
  
        // Check if the input is a number between 1 and 100
        if (gridSize !== null && !isNaN(gridSize) && gridSize >= 1 && gridSize <= 100) {
          // The input is valid, so break out of the loop
          break;
        }
  
        // The input is invalid, so display an error message
        alert('Error: Please enter a number between 1 and 100');}
    
    paintGrid(gridSize);
});


function changeState(){
    rainbowPick = !rainbowPick;
    if (rainbowPick) {
        rainbow.textContent = "Color black";
      } else {
        rainbow.textContent = "Rainbow mode";
      }
}

function paintGrid(gridSize){
    if(counter > 0){
        container.innerHTML = '';
    }
    counter++;

    // Create the grid of cubes
    for(let i = 0 ; i < gridSize * gridSize; i++){
        const cube = document.createElement('div');
        cube.classList.add('cube');
        container.append(cube);
    }
    
    // Select all of the cubes and set their width and height based on the grid size
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach(cube => {
      cube.style.width = `${100 / gridSize}%`;
      cube.style.height = `${100 / gridSize}%`;
    });

    // Add mouseenter event listeners to each cube that change the cube's background color
    cubes.forEach(cube => cube.addEventListener('mouseenter', function(e) {
        const rainbow = document.querySelector('.rainbow');
        if (rainbowPick) {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
          } else {
            e.target.style.backgroundColor = 'black';
          }
        }));
    
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault();
      paintGrid(gridSize);
    }
  });
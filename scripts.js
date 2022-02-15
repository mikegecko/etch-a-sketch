const buttons = document.querySelectorAll('.btn');
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.slider-value');
const gridContainer = document.querySelector('.grid-container')

//Adding event handlers
slider.addEventListener('input', sliderHandler);
buttons.forEach(element => {
    element.addEventListener('click', btnHandler)
});

//Add grid components
createGrid(slider.value);


//Add functions for clear|erase|colormode|rainbowmode|colorpicker
function clearGrid(){
    let child = gridContainer.lastElementChild;
    while(child){
        gridContainer.removeChild(child)
        child = gridContainer.lastElementChild;
    }
    createGrid(slider.value);
}
function eraseGrid(){

}

function sliderHandler(event){
    sliderOutput.innerHTML = slider.value + " x " + slider.value;
    clearGrid();               
    //createGrid(slider.value);
}

function btnHandler(event){
    //send each event to proper functions
    switch(event.target.id){
        case "clear":
            clearGrid();
            break;
        case "erase":
            eraseGrid();
            break;
        case "color":
            //code
            break;
        case "rainbow":
            //code
            break;
        default:
            console.log("ERROR");
    }
}

function gridHandler(event){
    console.log("click");
    event.target.style.backgroundColor = "black";
}

function createGrid(gridSize){
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for(let i = 0; i < gridSize ** 2 ; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.style.backgroundColor = "white";
        newDiv.style.userDrag = "none";
        newDiv.style.userDrag = "none";
        gridContainer.appendChild(newDiv);
        newDiv.addEventListener('mousedown', gridHandler);
    }
}
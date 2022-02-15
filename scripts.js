const buttons = document.querySelectorAll('.btn');
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.slider-value');
const gridContainer = document.querySelector('.grid-container');
const colorBtn = document.querySelector('#color');
const rainbowBtn = document.querySelector('#rainbow');
const eraseBtn = document.querySelector('#erase');
let colorToggle = 0;
let isDrawing = false;
//Adding event handlers
slider.addEventListener('input', sliderHandler);
buttons.forEach(element => {
    element.addEventListener('click', btnHandler)
});
//Run colorMode once to initialize button styles
colorMode();
//Add grid
createGrid(slider.value);


//Add functions for ✓clear|erase|✓colormode|✓rainbowmode|colorpicker
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
            colorMode(event);
            break;
        case "color":
            colorMode(event);
            break;
        case "rainbow":
            colorMode(event);
            break;
        default:
            console.log("ERROR");
    }
}

function colorMode(event){
    if(event == null || event == undefined){
        colorBtn.style.backgroundColor = '#1c3550';
        colorToggle = 0;
    }
    else{
        if(event.target.id == 'color'){
            event.target.style.backgroundColor = '#1c3550';
            rainbowBtn.style.backgroundColor = '#616E7C';
            eraseBtn.style.backgroundColor = '#616E7C'
            colorToggle = 0;
        }
        else if(event.target.id == 'rainbow'){
            event.target.style.backgroundColor = '#1c3550';
            colorBtn.style.backgroundColor = '#616E7C';
            eraseBtn.style.backgroundColor = '#616E7C'
            colorToggle = 1;
        }
        else if(event.target.id == 'erase'){
            event.target.style.backgroundColor = '#1c3550';
            rainbowBtn.style.backgroundColor = '#616E7C';
            colorBtn.style.backgroundColor = '#616E7C';
            colorToggle = 2;
        }
        else{
            console.log('ERROR');
        }
    }
    
}
function randomColor(){
    let rc = Math.floor(Math.random()*16777215).toString(16);
    return("#"+rc);
}
function gridHandler(event){
    
    if(isDrawing === true){
        if(colorToggle == 0){
            event.target.style.backgroundColor = "black";
        }
        else if(colorToggle == 1){
            event.target.style.backgroundColor = randomColor();
        }
        else if(colorToggle == 2)
            event.target.style.backgroundColor = 'white';
        else{
            console.log('Grid Handler Error');
        }
    }
    else{
        return;
    }
    
    
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
        newDiv.addEventListener('mouseenter', gridHandler);
        newDiv.addEventListener('mousedown', e => {
            isDrawing = true;
            gridHandler(e);
        });
        newDiv.addEventListener('mouseup', e => {
            isDrawing = false;
        });
    }
}
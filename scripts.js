const buttons = document.querySelectorAll('.btn');
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.slider-value');
const gridContainer = document.querySelector('.grid-container');
const colorBtn = document.querySelector('#color');
const rainbowBtn = document.querySelector('#rainbow');
let colorToggle = 0;

//Adding event handlers
slider.addEventListener('input', sliderHandler);
buttons.forEach(element => {
    element.addEventListener('click', btnHandler)
});
//Run colorMode once to initialize button styles
colorMode();
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
            colorToggle = 0;
        }
        else if(event.target.id == 'rainbow'){
            event.target.style.backgroundColor = '#1c3550';
            colorBtn.style.backgroundColor = '#616E7C';
            colorToggle = 1;
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
    if(colorToggle == 0){
        console.log("click");
        event.target.style.backgroundColor = "black";
    }
    else if(colorToggle == 1){
        console.log("Rainbow click");
        event.target.style.backgroundColor = randomColor();
    }
    else{
        console.log('Grid Handler Error');
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
        newDiv.addEventListener('mousedown', gridHandler);
    }
}
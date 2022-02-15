const buttons = document.querySelectorAll('.btn');
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.slider-value');

//Adding event handlers
slider.addEventListener('input', sliderHandler);
buttons.forEach(element => {
    element.addEventListener('click', btnHandler)
});
function sliderHandler(event){
    sliderOutput.innerHTML = slider.value + " x " + slider.value;
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

//Add grid components

//Add functions for clear|erase|colormode|rainbowmode|colorpicker
function clearGrid(){

}
function eraseGrid(){

}

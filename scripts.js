const buttons = document.querySelectorAll('.btn');

//Adding event handlers
buttons.forEach(element => {
    element.addEventListener('click', btnHandler)
});

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

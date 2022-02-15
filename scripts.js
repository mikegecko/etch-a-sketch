const buttons = document.querySelectorAll('.btn');

//Adding event handlers
buttons.forEach(element => {
    element.addEventListener('click', btnHandler)
});

function btnHandler(event){
    console.log(event.target.id);
}

//Add grid components

//Add functions for clear|eraser|colormode|rainbowmode|colorpicker


numbers.forEach( (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        appendScreen(mainscreen, button.innerText);
    })
})
operations.forEach( (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        basicOperation(button.innerText);
    })
});
comma.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(checkComma() == false) {
        if(mainscreen.innerHTML == '&nbsp;') {
            appendScreen(mainscreen, '0'); 
        }
        appendScreen(mainscreen, comma.innerText);
    }
})
c.addEventListener('click', (e) => {
    current = undefined;
    e.preventDefault();
    if(cleared == true) {
        clearScreen(upperscreen);
        memory = undefined;
    }
    clearScreen(mainscreen);
})
backspace.addEventListener('click', (e) => {
    e.preventDefault();
    back(mainscreen);
});
equals.addEventListener('click', (e) => {
    e.preventDefault();
    calculate();
});
sqrt.addEventListener('click', (e) => {
    e.preventDefault();

});
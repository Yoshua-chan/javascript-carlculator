numbers.forEach( (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        appendScreen(mainscreen, button.innerText);
    })
})
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
    e.preventDefault();
    if(cleared == true) {
        clearScreen(upperscreen);
    }
    clearScreen(mainscreen);
})
backspace.addEventListener('click', (e) => {
    e.preventDefault();
    back(mainscreen);
});

equals.addEventListener('click', (e) => {
    e.preventDefault();

});

/*          BASIC OPERATIONS           */
divide.addEventListener('click', (e) => {
    e.preventDefault();
    basicOperation(divide.innerText);
});
multiply.addEventListener('click', (e) => {
    e.preventDefault();
    basicOperation(multiply.innerText);
});
minus.addEventListener('click', (e) => {
    e.preventDefault();
    basicOperation(minus.innerText);
});
plus.addEventListener('click', (e) => {
    e.preventDefault();
    basicOperation(plus.innerText);
});

/*      SPECIAL OPERATIONS      */
mod.addEventListener('click', (e) => {
    e.preventDefault();

});
sqrt.addEventListener('click', (e) => {
    e.preventDefault();

});
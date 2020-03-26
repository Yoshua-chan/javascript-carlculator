function back(screen) {
    screen.innerText = screen.innerText.slice(0, -1); //slices last letter off
    if(screen.innerText == '') {
        screen.innerHTML = '&nbsp;';
        cleared = true;
    }
}
function appendScreen(screen, text) {
    if(screen.innerHTML == '&nbsp;') {
        screen.innerText = '';
    }
    screen.innerText = screen.innerText.concat(text);
    cleared = false; 
}
function clearScreen(screen) {
    screen.innerHTML = '&nbsp;';
    cleared = true;
}
function checkComma() {
    for(let i = 0; i < mainscreen.innerText.length; i++) {
        if(mainscreen.innerText[i] == '.') {
            return true;
        }
    }
    return false;
}
function basicOperation(value) {
    clearScreen(upperscreen);
    appendScreen(upperscreen, mainscreen.innerText);
    clearScreen(mainscreen);
    operation = value;
    memory = Number(upperscreen.innerText); 
    console.log(value);  
}
 function calculate() {
    let answer; 
    current = Number(mainscreen.innerText);
    switch(operation) {
        case '+':
            answer = memory + current;
        break;
        case '-':
            answer = memory - current;
        break;
        case '÷':
            answer = memory / current;
        break;
        case '×':
            answer = memory * current;
        break;
        case 'mod':
            answer = memory % current;
        break;
        default:
            answer = 'error'
        break;
    }
    clearScreen(upperscreen);
    clearScreen(mainscreen);
    appendScreen(mainscreen, answer);
    memory = undefined;
    current = undefined;
} 
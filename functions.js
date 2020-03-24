function back(screen) {
    screen.innerText = screen.innerText.slice(0, -1); //slices last letter off
    if(screen.innerText == '') {
        screen.innerHTML = '&nbsp;';
        cleared = true;
    }
    console.log(screen.innerHTML);
}
function appendScreen(screen, text) {
    if(screen.innerHTML == '&nbsp;') {
        screen.innerText = '';
    }
    screen.innerText = screen.innerText.concat(text);
    cleared = false; 
    console.log(screen.innerHTML);
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
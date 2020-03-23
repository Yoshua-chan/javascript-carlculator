function back(screen) {
    screen.innerText = screen.innerText.slice(0, -1);
    if(screen.innerText == '') {
        screen.innerHTML = '&nbsp;';
    }
    console.log(screen.innerHTML);
}
function appendScreen(screen, text) {
    if(screen.innerHTML == '&nbsp;') {
        screen.innerText = '';
    }
    screen.innerText = screen.innerText.concat(text);
    console.log(screen.innerHTML);
}
function clearScreen(screen) {
    screen.innerHTML = '&nbsp;';
    console.log(screen.innerHTML);
}
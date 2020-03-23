numbers.forEach( (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        appendScreen(mainscreen, button.innerText);
    })
})
c.addEventListener('click', (e) => {
    e.preventDefault();
    clearScreen(mainscreen);
})
backspace.addEventListener('click', (e) => {
    e.preventDefault();
    back(mainscreen);
});
mod.addEventListener('click', (e) => {
    e.preventDefault();

});
sqrt.addEventListener('click', (e) => {
    e.preventDefault();

});
divide.addEventListener('click', (e) => {
    e.preventDefault();

});
multiply.addEventListener('click', (e) => {
    e.preventDefault();

});
minus.addEventListener('click', (e) => {
    e.preventDefault();

});
plus.addEventListener('click', (e) => {
    e.preventDefault();

});
equals.addEventListener('click', (e) => {
    e.preventDefault();

});
comma.addEventListener('click', (e) => {
    e.preventDefault();

})
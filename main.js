numbers.forEach( (button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(button.innerText); 
    })
})
c.addEventListener('click', (e) => {
    e.preventDefault();
    console.clear(); 
})

function gujec(text) {
    console.log(text); 
}
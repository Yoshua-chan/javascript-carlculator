const upperscreen = document.getElementById('upperscreen');
const mainscreen = document.getElementById('mainscreen');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.basicOperation')
const clear = document.getElementById('c'); 
const backspace = document.getElementById('backspace');
const sqrt = document.getElementById('sqrt'); 
const equals = document.getElementById('equals');
const comma = document.getElementById('comma'); 
let current = 0;
let memory = 0;
let operation = '';
let cleared = true; 
let bul = false;
let mtt = false;
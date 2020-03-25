const upperscreen = document.getElementById('upperscreen');
const mainscreen = document.getElementById('mainscreen');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.basicOperation')
const clear = document.getElementById('c'); 
const backspace = document.getElementById('backspace');
const mod = document.getElementById('mod');
const sqrt = document.getElementById('sqrt'); 
const equals = document.getElementById('equals');
const comma = document.getElementById('comma'); 
let current;
let memory;
let operation = '';
let cleared = true; 

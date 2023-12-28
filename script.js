const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = '';//= prompt('numero 1');
let operator // = prompt('operador');
let num2 // = prompt('numero 2');

const display = document.querySelector('#display');
const numBut = document.querySelectorAll('.num-but');
let displayValue = '';

for (let i = 0; i < numBut.length; i++) {
    numBut[i].addEventListener('click', () => {
        displayValue += numBut[i].value;
        display.textContent = displayValue;
        if(num1 !== '') {
            num2 = displayValue;
            console.log(`num1: ${num1} ${operator} num2: ${num2}`)
        }
    });
    
}

const opBut = document.querySelectorAll('.op-but');

for (let i = 0; i < opBut.length; i++) {
    opBut[i].addEventListener('click', () => {
        if (num1 === '') {
            num1 = displayValue;
        } else if(num1 !== '') {
            num2 = displayValue;
        }
        displayValue = '';
        display.textContent = '';
        operator = opBut[i].value;
        console.log(`num1: ${num1} ${operator} num2: ${num2}`)
    });
}

let result;
const resultBut = document.querySelector('.result-but');
resultBut.addEventListener('click', () => {
    result = operate(num1, num2, operator);
    console.log(result);
    display.textContent = result;
    num1 = '';
    num2 = '';
    displayValue = '';
    console.log(`num1: ${num1} ${operator} num2: ${num2}`)

})

const clearBut = document.querySelector('.clear-but');
clearBut.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    displayValue = '';
    display.textContent = displayValue;
});

function operate (num1, num2, operator) {
    switch (operator){
        case '+':
            return add(+num1, +num2);
        case '-':
            return subtract(+num1, +num2);
        case '*':
            return multiply(+num1, +num2);
        case '/':
            return divide(+num1, +num2);
        default:
            alert('...');
    }
}
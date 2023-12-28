let num1 = '';
let operator
let num2 ='';
let result = '';
let displayValue = '';

const display = document.querySelector('#display');
const numberButton = document.querySelectorAll('.num-but');
const operatorButton = document.querySelectorAll('.op-but');
const resultButton = document.querySelector('.result-but');
const clearBut = document.querySelector('.clear-but');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', () => {
        result = '';
        displayValue += numberButton[i].value;
        display.textContent = displayValue;
        if(num1 !== '') {
            num2 = displayValue;
        }
    });
}

const decimalButton = document.querySelector('.decimal-but');
decimalButton.addEventListener('click', () => {
    if (!displayValue.includes('.')){
        displayValue += decimalButton.value;
        display.textContent = displayValue;
    }
});

for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', () => {
        if (result !== ''){
            num1 = result;
        }

        if (num1 === '' && num2 === '') {
            num1 = displayValue;
            operator = operatorButton[i].value;
            displayValue = '';

        } else if (num1 !== '' && num2 === '') {
            num2 = displayValue;
            operator = operatorButton[i].value;
            displayValue = '';

        } else if (num1 !== '' && num2 !== '') {
            operator = operatorButton[i].value;
            result = operate(num1, num2, operator);
            num1 = result;
            num2 = displayValue;
            displayValue = '';

        }
        display.textContent = '';
    });
}

resultButton.addEventListener('click', () => {
    if (operator === '/' && num2 === '0'){
        display.textContent = 'Que hiciste?';
    } else if (num1 !== '' && num2 !== '') {
        result = operate(num1, num2, operator);
        display.textContent = Math.round(result * 1000000) / 1000000;
        num1 = '';
        num2 = '';
        displayValue = '';
    }
    // do nothing!
})

clearBut.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    displayValue = '';
    result = '';
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
            displayValue = '';
    }
}
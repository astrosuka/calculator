let num1 = '';
let operator
let num2 ='';
let result = '';
let displayValue = '';

const display = document.querySelector('#display');
const numberButton = document.querySelectorAll('.num-but');
const operatorButton = document.querySelectorAll('.op-but');
const resultButton = document.querySelector('.result-but');
const clearButton = document.querySelector('.clear-but');
const dotButton = document.querySelector('.dot-but');
const backspaceButton = document.querySelector('.backspace-but');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operatorKeys = ['+', '-', '*', '/'];

document.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') backspace();
    if (e.key === 'Enter' || e.key === '=') getResult();
    if (e.key === 'Escape') clear();
    if (e.key === '.') setDot();
    if (operatorKeys.includes(e.key)) setOperator(e.key);
    if (numberKeys.includes(e.key)) setNumber(e.key);
});

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', () => {
        setNumber(numberButton[i].value);
    });
}

for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', () => {
        setOperator(operatorButton[i].value);
    });
}

dotButton.addEventListener('click', setDot);
backspaceButton.addEventListener('click', backspace);
resultButton.addEventListener('click', getResult)
clearButton.addEventListener('click', clear);

function setNumber (num) {
    if (displayValue.length <= 10) {
        result = '';
        displayValue += num;
        display.textContent = displayValue;
        if(num1 !== '') {
            num2 = displayValue;
        }
    }
}

function setDot () {
    if (!displayValue.includes('.')){
        displayValue += dotButton.value;
        display.textContent = displayValue;
    }
}

function setOperator (op) {
    if (result !== ''){
        num1 = result;
    }
    
    if (num1 === '' && num2 === '') {
        num1 = displayValue;
        operator = op;
        displayValue = '';

    } else if (num1 !== '' && num2 === '') {
        num2 = displayValue;
        operator = op;
        displayValue = '';
        
    } else if (num1 !== '' && num2 !== '') {
        operator = op;
        result = operate(num1, num2, operator);
        num1 = result;
        num2 = displayValue;
        displayValue = '';
    }
    
    display.textContent = '';
}

function getResult () {
    if (operator === '/' && num2 === '0'){
        display.textContent = '!!!';
        document.body.style.backgroundColor = "red";
    } else if (num1 !== '' && num2 !== '') {
        result = operate(num1, num2, operator);
        display.textContent = Math.round(result * 1000000) / 1000000;
        num1 = '';
        num2 = '';
        displayValue = '';
    }
}

function backspace () {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
}

function clear () {
    num1 = '';
    num2 = '';
    displayValue = '';
    result = '';
    display.textContent = displayValue;
    document.body.style.backgroundColor = "";
}

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
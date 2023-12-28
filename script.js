const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = prompt('numero 1');
let operator = prompt('operador');
let num2 = prompt('numero 2');

alert(operate(num1, num2, operator));

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

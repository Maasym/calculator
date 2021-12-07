let operandA = null;
let operandB = null;
let operation = null;
let result = null;
let divideByZero = false;


const add = (num1, num2) => (num1 + num2);

const subtract = (num1, num2) => (num1 - num2);

const multiply = (num1, num2) => (num1 * num2);

function divide(num1, num2) {
    if (num2 === 0) {
        divideByZero = true;
        operandB = null;
        operation = null;
        return null;
    } else {
        return (num1 / num2);
    }
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}
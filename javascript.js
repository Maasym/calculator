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

const calcScreen = document.getElementById('display');
const clearBtn = document.getElementById('clear');

const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one-btn');
const twoBtn = document.getElementById('two-btn');
const threeBtn = document.getElementById('three-btn');
const fourBtn = document.getElementById('four-btn');
const fiveBtn = document.getElementById('five-btn');
const sixBtn = document.getElementById('six-btn');
const sevenBtn = document.getElementById('seven-btn');
const eightBtn = document.getElementById('eight-btn');
const nineBtn = document.getElementById('nine-btn');

const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('division');
const equalsBtn = document.getElementById('equal-btn');


function initCalc() {
    operandA = 0;
    operandB = null;
    operation = null;
    result = null;
}

function countDecimals(num) {
    if (num % 1 !== 0) {
        let digitLimit = 9;
        let integer = num.toString().split('.')[0];
        let decimal = num.toString().split('.')[1];
        if (integer.length > digitLimit) {
            return 0;
        } else if (integer.length + decimal.length > digitLimit) {
            return (digitLimit - integer.length);
        } else {
            return decimal.length;
        }
    } else {
        return 0;
    }
}

function roundDecimal(num) {
    let decimalDigits = countDecimals(num);
    return num.toFixed(decimalDigits);
}

function refreshScreen() {
    if (divideByZero === true) {
        calcScreen.textContent = "Do not divide by 0!";
        initCalc();
        divideByZero = false;
    } else if (operandA === null && operation === null && operandB === null && result === null) {
        initCalc();
        calcScreen.textContent = operandA;
    } else if (operandA !== null && operation === null && operandB === null && result === null) {
        calcScreen.textContent = operandA;
    } else if (operandA !== null && operation !== null && operandB === null && result === null) {
        calcScreen.textContent = `${roundDecimal(operandA)} ${operation}`;
    } else if (operandA !== null && operation !== null && operandB !== null && result === null) {
        calcScreen.textContent = operandB;
    } else if (operandA !== null && operation !== null && operandB !== null && result !== null) {
        calcScreen.textContent = roundDecimal(result);
    }
}

function getResult() {
    result = operate(operandA, operandB, operation);
    operandA = result;
}

function clickNumBtn(num) {
    if (operandA === null && operation === null && operandB === null && result === null) {
        initCalc();
        operandA = num;
    } else if (operandA !== null && operation === null && operandB === null && result === null) {
        operandA = +`${operandA}${num}`;
    } else if (operandA !== null && operation !== null && operandB === null && result === null) {
        operandB = num;
    } else if (operandA !== null && operation !== null && operandB !== null && result === null) {
        operandB = +`${operandB}${num}`;
    } else if (operandA !== null && operation !== null && operandB !== null && result !== null) {
        operandA = result;
        operandB = num;
        result = null;
    }
    refreshScreen();
}

clearBtn.addEventListener('click', event => {
    initCalc();
    refreshScreen();
});

oneBtn.addEventListener('click', event => {
    clickNumBtn(1);
});

twoBtn.addEventListener('click', event => {
    clickNumBtn(2);
});

threeBtn.addEventListener('click', event => {
    clickNumBtn(3);
});

fourBtn.addEventListener('click', event => {
    clickNumBtn(4);
});

fiveBtn.addEventListener('click', event => {
    clickNumBtn(5);
});

sixBtn.addEventListener('click', event => {
    clickNumBtn(6);
});

sevenBtn.addEventListener('click', event => {
    clickNumBtn(7);
});

eightBtn.addEventListener('click', event => {
    clickNumBtn(8);
});

nineBtn.addEventListener('click', event => {
    clickNumBtn(9);
});

zeroBtn.addEventListener('click', event => {
    clickNumBtn(0);
});

function pressOperationBtn(operator) {
    if (operation !== null && operandA !== null && operandB !== null && result === null) {
        getResult();
        operation = operator;
    } else if (operation !== null && operandA !== null && operandB !== null && result !== null) {
        operation = operator;
        operandA = result;
        operandB = null;
        result = null;
    } else {
        operation = operator;
    }
}

plusBtn.addEventListener('click', event => {
    pressOperationBtn('+');
    refreshScreen();
});

minusBtn.addEventListener('click', event => {
    pressOperationBtn('-');
    refreshScreen();
});

multiplyBtn.addEventListener('click', event => {
    pressOperationBtn('*');
    refreshScreen();
});

divideBtn.addEventListener('click', event => {
    pressOperationBtn('/');
    refreshScreen();
});

equalsBtn.addEventListener('click', event => {
    if (operandA !== null && operandB !== null && operation !== null) {
        getResult();
    }
    refreshScreen();
});

initCalc();
refreshScreen();
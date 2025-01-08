// summation
function add(a, b) {
    return a + b
}

// subtraction
function subtract(a, b) {
    return a - b
}

// multiplication
function multiply(a, b) {
    return a * b
}

// division
function divide(a, b) {
    return a / b
}

// parts of operation that will be used to update the display later
let firstNum, secondNum, operation;

function operate(numberOne, numberTwo, operator) {
    switch (String(operator)) {
        case '+':
            console.log(add(numberOne, numberTwo));
            break;
        case '-':
            console.log(subtract(numberOne, numberTwo));
            break;
        case '*':
            console.log(multiply(numberOne, numberTwo));
            break;
        case '/':
            console.log(divide(numberOne, numberTwo));
            break;
    }
}

// test run
firstNum = 1;
secondNum = 2;
operation = '+';

operate(firstNum, secondNum, operation);
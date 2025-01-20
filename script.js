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
// firstNum = 1;
// secondNum = 2;
// operation = '+';
// operate(firstNum, secondNum, operation);


const calculatorDisplay = document.querySelector('#cal-display');

// display clicked digit buttons
function displayNumber () {
    // select all numbers
    const calculatorNumbers = document.querySelectorAll("[class^='button-number-']");
    calculatorNumbers.forEach(number => {
        number.addEventListener('click', function(event) {
            const clickedNumber = event.target;
            const buttonNumber = clickedNumber.innerText;
            calculatorDisplay.textContent += buttonNumber;
        })
    })
    
    // select all operators
    const calculatorOperators = document.querySelectorAll("[class^='button-operator-']");
    calculatorOperators.forEach(operator => {
        operator.addEventListener('click', function(event) {
            const clickedOperator = event.target;
            const buttonOperator = clickedOperator.innerText;
            calculatorDisplay.textContent += buttonOperator;
        })
    })

}

// display clear
function displayClear() {
    const clearFunction = document.querySelector('.button-clear');

    clearFunction.addEventListener('click', () => {
        calculatorDisplay.textContent = 0;
    })
}


displayNumber();
displayClear();
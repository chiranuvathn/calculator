const calculatorDisplay = document.querySelector('#cal-display');
let firstNum = 0;
let secondNum = 0;
let operation = '';
let result = 0;

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

// perform calculation based on operator
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

function displayClear() {
    const clearFunction = document.querySelector('.button-clear');

    clearFunction.addEventListener('click', () => {
        calculatorDisplay.textContent = 0;
        
        firstNum = 0;
        secondNum = 0;
        operation = '';
        result = 0;
    })
}

function displayUpdate(input) {
    if (calculatorDisplay.textContent == 0) {
        calculatorDisplay.textContent = '';
    }

    calculatorDisplay.textContent += input;
}

function clickedNumber () {
    const calculatorNumbers = document.querySelectorAll("[class^='button-number-']");
    calculatorNumbers.forEach(number => {
        number.addEventListener('click', function(e) {
            const event = e.target;
            const buttonNumber = event.innerText;
            
            if (operation == '') {
                firstNum += parseInt(buttonNumber);
                // console.log('This is firstNum ' + firstNum);
            } else {
                secondNum += parseInt(buttonNumber);
                // console.log('This is secondNum ' + secondNum);
            }

            displayUpdate(buttonNumber);
        })
    })
}

function clickedOperator () {
    const calculatorOperators = document.querySelectorAll("[class^='button-operator-']");
    calculatorOperators.forEach(operator => {
        operator.addEventListener('click', function(e) {
            const event = e.target;
            const buttonOperator = event.innerText;

            operation = buttonOperator;
            // console.log('This is operator ' + operation);

            displayUpdate(buttonOperator);
        })
    })
}

function performCalculation () {
    const calculatorEqual = document.querySelector('.button-equal');

    calculatorEqual.addEventListener('click', () => {
        operate(firstNum, secondNum, operation);
    })

}

clickedNumber();
clickedOperator();
performCalculation();
displayClear();
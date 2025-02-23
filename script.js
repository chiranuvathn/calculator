const calculatorDisplay = document.querySelector('#cal-display');
let firstNum = '';
let secondNum = '';
let operation = '';
let result = '';

function add(a, b) {
    return Math.round((a + b) * 100) / 100
}

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100
}

function divide(a, b) {
    return Math.round((a / b) * 100) / 100
}

function operate(numberOne, numberTwo, operator) {
    switch (String(operator)) {
        case '+':
            result = add(numberOne, numberTwo).toString();
            break;
        case '-':
            result = subtract(numberOne, numberTwo).toString();
            break;
        case '*':
            result = multiply(numberOne, numberTwo).toString();
            break;
        case '/':
            result = divide(numberOne, numberTwo).toString();
            break;
    }
}

function clickedPercentage() {
    const percentage = document.querySelector('.button-percentage');

    percentage.addEventListener('click', () => {
        if (result == '') {
            alert("Error: No Input! Please try again.");
        }

        result /= 100;

        calculatorDisplay.textContent = result;
    })
}

function clickedDelete() {
    const del = document.querySelector('.button-delete');

    del.addEventListener('click', () => {
        if (result) {
            // pending to make this work during display update and variables reset
            result = result.slice(0, -1);
            displayUpdate();
        } else if (secondNum) {
            secondNum = secondNum.slice(0, -1);
            displayUpdate();
        } else if (operation) {
            operation = '';
            displayUpdate();
        } else if (firstNum) {
            firstNum = firstNum.slice(0, -1);
            displayUpdate();
        }

        if (!firstNum && !operation && !secondNum) {
            resetCalculator();
        } else {
            displayUpdate();
        }
    })
}

function resetCalculator() {
    calculatorDisplay.textContent = 0;
    firstNum = '';
    secondNum = '';
    operation = '';
    result = '';
}

function displayClear() {
    const clearFunction = document.querySelector('.button-clear');

    clearFunction.addEventListener('click', resetCalculator);
}

function displayUpdate() {
    if (calculatorDisplay.textContent == 0) {
        calculatorDisplay.textContent = '';
    }

    calculatorDisplay.textContent = firstNum + operation + secondNum;    
}

function clickedNumber () {
    const calculatorNumbers = document.querySelectorAll("[class^='button-number-']");
    
    calculatorNumbers.forEach(number => {
        number.addEventListener('click', function(e) {
            const event = e.target;
            const buttonNumber = event.innerText;
            
            if (operation == '') {
                firstNum += buttonNumber;
            } else {
                secondNum += buttonNumber;
            }

            displayUpdate();
        })
    })
}

function clickedOperator () {
    const calculatorOperators = document.querySelectorAll("[class^='button-operator-']");
    
    calculatorOperators.forEach(operator => {
        operator.addEventListener('click', function(e) {
            const event = e.target;
            const buttonOperator = event.innerText;

            if (operation == '') {
                operation = buttonOperator;
            } else {
                firstNum = result;
                secondNum = '';
                operation = buttonOperator;
            }

            displayUpdate();
        })
    })
}

function performCalculation () {
    const calculatorEqual = document.querySelector('.button-equal');

    calculatorEqual.addEventListener('click', () => {
        if (calculatorDisplay.innerText == '0') {
            alert("Error: No Input! Please try again.");
            resetCalculator();
        // if any of these is falsy
        } else if (!firstNum || !secondNum || !operation) {
            alert("Error: Missing Number / Operator. Please try again.");
            resetCalculator();
        }

        operate(parseFloat(firstNum), parseFloat(secondNum), operation);

        calculatorDisplay.textContent = result;
    })

}

clickedNumber();
clickedOperator();
performCalculation();
clickedPercentage();
clickedDelete();
displayClear();
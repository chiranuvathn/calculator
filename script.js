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
            result = add(numberOne, numberTwo);
            break;
        case '-':
            result = subtract(numberOne, numberTwo);
            break;
        case '*':
            result = multiply(numberOne, numberTwo);
            break;
        case '/':
            result = divide(numberOne, numberTwo);
            break;
    }
}

function displayClear() {
    const clearFunction = document.querySelector('.button-clear');

    clearFunction.addEventListener('click', () => {
        calculatorDisplay.textContent = 0;
        
        firstNum = '';
        secondNum = '';
        operation = '';
        result = '';
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
                firstNum += buttonNumber;
            } else {
                secondNum += buttonNumber;
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

            if (operation == '') {
                operation = buttonOperator;
            } else {
                firstNum = result;
                secondNum = '';
                operation = buttonOperator;
            }

            displayUpdate(buttonOperator);
        })
    })
}

function performCalculation () {
    const calculatorEqual = document.querySelector('.button-equal');

    calculatorEqual.addEventListener('click', () => {
        if (calculatorDisplay.innerText == '0') {
            alert("Error: No Input! Please try again.");
        // if any of these is falsy
        } else if (!firstNum || !secondNum || !operation) {
            alert("Error: Missing Number / Operator. Please try again.");
        }

        operate(parseFloat(firstNum), parseFloat(secondNum), operation);
        calculatorDisplay.textContent = result;
    })

}

clickedNumber();
clickedOperator();
performCalculation();
displayClear();
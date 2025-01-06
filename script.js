// sum function
function add(...args) {
    const totalSum = args.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    )
    return parseFloat(totalSum).toFixed(8)
}

// subtract function
function subtract(...args) {
    const totalSubtract = args.reduce(
        (previousValue, currentValue) => previousValue - currentValue
    )
    return parseFloat(totalSubtract).toFixed(8)
}

// multiply function
function multiply(...args) {
    const totalProduct = args.reduce(
        (previousValue, currentValue) => previousValue * currentValue
    )
    return parseFloat(totalProduct).toFixed(8)
}

// divide function
function divide(...args) {
    const totalDivision = args.reduce(
        (previousValue, currentValue) => previousValue / currentValue
    )
    return parseFloat(totalDivision).toFixed(8)
}


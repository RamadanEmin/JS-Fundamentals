function simpleCalculator(numOne, numTwo, operationName) {
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    let operation;
    switch (operationName) {
        case `multiply`:
            operation = multiply;
            break;
        case `divide`:
            operation = divide;
            break;
        case `add`:
            operation = add;
            break;
        case `subtract`:
            operation = subtract;
            break;
    }
    return operation(numOne, numTwo);
}
let result = simpleCalculator(40, 8, 'subtract');
console.log(result);


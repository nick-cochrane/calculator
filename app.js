const displayPane = document.querySelector('#calc-screen');

let calculatorState = {
    firstNumber: null,
    secondNumber: null,
    operator: ''
}

const buttons = [...document.querySelectorAll('.number-button')];
buttons.forEach(button => button.addEventListener("click", numberButtonClick));

function numberButtonClick (e) {
    currentDisplay = displayPane.textContent;
    displayPane.textContent = currentDisplay + e.target.textContent;
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener("click", function (e) {
    displayPane.textContent = null;
});

const operatorButtons = [...document.querySelectorAll('.operator-button')];
operatorButtons.forEach(button => button.addEventListener("click", operatorButtonClick));

function operatorButtonClick (e) {
    calculatorState.firstNumber = parseFloat(displayPane.textContent);
    displayPane.textContent = null;
    calculatorState.operator = e.target.id;
    console.log(calculatorState);
}

const equalsButton = document.querySelector('#equals-button');
equalsButton.addEventListener("click", function (e) {
    calculatorState.secondNumber = parseFloat(displayPane.textContent);
    result = operate(window[calculatorState.operator], calculatorState.firstNumber, calculatorState.secondNumber);
    displayPane.textContent = result;
    calculatorState.firstNumber = result;
    calculatorState.secondNumber = null;
});

const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener("click", function (e) {
    displayPane.textContent = null;
    calculatorState = {
        firstNumber: null,
        secondNumber: null,
        operator: ''
    }
});



function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function operate (operator, x, y) {
    return operator(x, y);
}


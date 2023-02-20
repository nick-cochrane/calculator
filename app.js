/* To Fix/ADD
% button
Fix decimal point clearing bug
Limit number of numbers on calc screen
*/

const displayPane = document.querySelector('#calc-screen');

let calculatorState = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    tempResult: null
}

const buttons = [...document.querySelectorAll('.number-button')];
buttons.forEach(button => button.addEventListener("click", numberButtonClick));

function numberButtonClick (e) {
    if (calculatorState.operator === '') {
        currentDisplay = displayPane.textContent;
        displayPane.textContent = currentDisplay + e.target.textContent;
        calculatorState.firstNumber = parseFloat(displayPane.textContent);
        console.log(calculatorState);
    } else {
        currentDisplay = calculatorState.secondNumber;
        displayPane.textContent = currentDisplay + e.target.textContent;
        calculatorState.secondNumber = parseFloat(displayPane.textContent);
        console.log(calculatorState);
    }
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener("click", function (e) {
    if (calculatorState.firstNumber === '') {
        displayPane.textContent = '';
    } else {
        calculatorState.secondNumber = '';
        displayPane.textContent = '';
    }
});

const operatorButtons = [...document.querySelectorAll('.operator-button')];
operatorButtons.forEach(button => button.addEventListener("click", operatorButtonClick));

function operatorButtonClick (e) {
    if (calculatorState.secondNumber === '') {
        displayPane.textContent = calculatorState.firstNumber;
        calculatorState.operator = e.target.id;
        console.log(calculatorState);
    } else {
        result = operate(window[calculatorState.operator], calculatorState.firstNumber, calculatorState.secondNumber);
        calculatorState.firstNumber = result;
        displayPane.textContent = calculatorState.firstNumber;
        calculatorState.secondNumber = '';
        calculatorState.operator = e.target.id;
        console.log(calculatorState);
    }
};

const equalsButton = document.querySelector('#equals-button');
equalsButton.addEventListener("click", function (e) {
    calculatorState.secondNumber = parseFloat(displayPane.textContent);
    result = operate(window[calculatorState.operator], calculatorState.firstNumber, calculatorState.secondNumber);
    displayPane.textContent = result;
    calculatorState.firstNumber = result;
    calculatorState.secondNumber = '';
    console.log(calculatorState);
});

const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener("click", function (e) {
    displayPane.textContent = null;
    calculatorState = {
        firstNumber: '',
        secondNumber: '',
        operator: ''
    }
});

const plusMinusButton = document.querySelector('#plus-minus');
plusMinusButton.addEventListener("click", function (e) {
    if (calculatorState.secondNumber === ''){
        calculatorState.firstNumber = calculatorState.firstNumber * -1;
        displayPane.textContent = calculatorState.firstNumber;
        console.log(calculatorState);
    } else {
        calculatorState.secondNumber = calculatorState.secondNumber * -1;
        displayPane.textContent = calculatorState.secondNumber;
        console.log(calculatorState);
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


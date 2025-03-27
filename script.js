
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperator(op) {
    if (currentInput) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}

function calculateResult() {
    if (currentInput && operator && firstOperand !== null) {
        const secondOperand = parseFloat(currentInput);
        let result;
        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
        }
        updateDisplay(result);
        currentInput = '';
        operator = null;
        firstOperand = null;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    updateDisplay('');
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

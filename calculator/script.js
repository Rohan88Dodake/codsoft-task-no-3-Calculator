let currentInput = '';
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';
let result = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    if (currentInput === '') return;
    
    if (currentInput.includes('+')) {
        [firstOperand, secondOperand] = currentInput.split('+');
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (currentInput.includes('-')) {
        [firstOperand, secondOperand] = currentInput.split('-');
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (currentInput.includes('*')) {
        [firstOperand, secondOperand] = currentInput.split('*');
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (currentInput.includes('/')) {
        [firstOperand, secondOperand] = currentInput.split('/');
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
    }
    
    document.getElementById('display').value = result;
    currentInput = result.toString();
}

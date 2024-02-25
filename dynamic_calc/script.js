let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.textContent = currentInput;
}

function operate(operator) {
    currentInput += ` ${operator} `;
    display.textContent = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '0';
    }
}

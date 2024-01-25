// script.js

// custom config for the MTW app 
const mtwAppConfig = {
    border: true // app border in the MTW page                    
}

// Implement these functions to use private API        
const sendPrivateApiRequest = async () => {
    // your code here:
    // sendRequestToParent({ cat: 'getAssets' })
}

const acceptPrivateApiResponse = async (data) => {
    // process received data here:
    // console.log(data)
}

// Use this to send on document load
document.addEventListener('DOMContentLoaded', () => {
    // your code here:
    //sendRequestToParent({ method: 'getAssets' })
})

// Calculator logic
let currentValue = '';
let display = document.getElementById('display');
let memory = 0;

function appendValue(value) {
    currentValue += value;
    display.textContent = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.textContent = '0';
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    display.textContent = currentValue || '0';
}

function calculateResult() {
    try {
        currentValue = Function('"use strict";return (' + currentValue + ')')();
        display.textContent = currentValue;
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateFactorial() {
    try {
        const num = parseInt(currentValue);
        if (!isNaN(num) && num >= 0) {
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            currentValue = result.toString();
            display.textContent = currentValue;
        } else {
            display.textContent = 'Error';
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    currentValue += memory.toString();
    display.textContent = currentValue;
}

function memoryAdd() {
    try {
        const num = parseFloat(currentValue);
        if (!isNaN(num)) {
            memory += num;
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}

function memorySubtract() {
    try {
        const num = parseFloat(currentValue);
        if (!isNaN(num)) {
            memory -= num;
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}

function memoryStore() {
    try {
        const num = parseFloat(currentValue);
        if (!isNaN(num)) {
            memory = num;
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateReciprocal() {
    try {
        const num = parseFloat(currentValue);
        if (num !== 0) {
            currentValue = (1 / num).toString();
            display.textContent = currentValue;
        } else {
            display.textContent = 'Error';
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}

// Additional scientific calculator functions
function calculatePi() {
    currentValue += Math.PI.toString();
    display.textContent = currentValue;
}

function calculateLn() {
    try {
        const num = parseFloat(currentValue);
        if (num > 0) {
            currentValue = Math.log(num).toString();
            display.textContent = currentValue;
        } else {
            display.textContent = 'Error';
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateLog() {
    try {
        const num = parseFloat(currentValue);
        if (num > 0) {
            currentValue = Math.log10(num).toString();
            display.textContent = currentValue;
        } else {
            display.textContent = 'Error';
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculatePower() {
    try {
        const values = currentValue.split('**');
        if (values.length === 2) {
            const base = parseFloat(values[0]);
            const exponent = parseFloat(values[1]);
            currentValue = Math.pow(base, exponent).toString();
            display.textContent = currentValue;
        } else {
            display.textContent = 'Error';
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}

function calculateAbsolute() {
    try {
        const num = parseFloat(currentValue);
        currentValue = (num >= 0) ? num.toString() : (-num).toString();
        display.textContent = currentValue;
    } catch (error) {
        display.textContent = 'Error';
    }
}
function calculateMod() {
    try {
        const values = currentValue.split('%');
        if (values.length === 2) {
            const num1 = parseFloat(values[0]);
            const num2 = parseFloat(values[1]);
            if (!isNaN(num1) && !isNaN(num2)) {
                currentValue = (num1 % num2).toString();
                display.textContent = currentValue;
            } else {
                display.textContent = 'Error';
            }
        } else {
            display.textContent = 'Error';
        }
    } catch (error) {
        display.textContent = 'Error';
    }
}



function calculateExp() {
    try {
        const num = parseFloat(currentValue);
        currentValue = Math.exp(num).toString();
        display.textContent = currentValue;
    } catch (error) {
        display.textContent = 'Error';
    }
}

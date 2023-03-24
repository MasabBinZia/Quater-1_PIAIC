"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
//Task: Create a Function to Calculate the Factorial of a Number
var cal_Factorial = function (num) {
    var factorial = 1;
    for (var i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
};
var inputNumber = parseInt(prompt("Enter a number:"));
console.log("The factorial of ".concat(inputNumber, " is ").concat(cal_Factorial(inputNumber)));

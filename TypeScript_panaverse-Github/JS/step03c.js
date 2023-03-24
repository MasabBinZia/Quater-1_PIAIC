"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var answers = await inquirer_1["default"].prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");

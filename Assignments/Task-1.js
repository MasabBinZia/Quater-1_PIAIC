"use strict";
exports.__esModule = true;
var prompt = require('prompt-sync')();
//Taking prompt from User.
var englishMarks = parseInt(prompt("What is Your English Marks ? \n"));
var mathsMarks = parseInt(prompt("What is Your Maths   Marks ? \n"));
var urduMarks = parseInt(prompt("What is Your Maths   Marks ? \n"));
var scieneMarks = parseInt(prompt("What is Your Maths   Marks ? \n"));
var pakstdMarks = parseInt(prompt("What is Your Maths   Marks ? \n"));
// Calculating Avg Marks 
var avgMarks = (englishMarks + mathsMarks + urduMarks + scieneMarks + pakstdMarks) / 5;
//Conditions for Grading according to the avgMarks
if (avgMarks > 80) {
    console.log("Your Grade is \"A\" and your marks are ".concat(avgMarks));
}
else if (avgMarks >= 70 && avgMarks < 80) {
    console.log("Your Grade is \"B\" and your marks are ".concat(avgMarks));
}
else if (avgMarks >= 60 && avgMarks < 70) {
    console.log("Your Grade is \"C\" and your marks are ".concat(avgMarks));
}
else if (avgMarks >= 50 && avgMarks < 60) {
    console.log("Your Grade is \"D\" and your marks are ".concat(avgMarks));
}
else {
    console.log("Your Grade is \"F\",Marks ".concat(avgMarks));
}

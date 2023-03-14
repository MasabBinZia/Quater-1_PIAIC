"use strict";
exports.__esModule = true;
// Loops Revision
//    nested loop 
for (var i = 0; i <= 1; i++) {
    //  console.log("Parent");
    for (var j = 0; j < 2; j++) {
        // console.log("child"); 
    }
}
var firstName = ["Sam-", "kenny-", "Simon-"];
var lastName = ["zzz", "tim", "john"];
var fullName = [];
for (var i = 0; i < firstName.length; i++) {
    for (var j = 0; j < lastName.length; j++) {
        fullName.push(firstName[i] + lastName[j]);
    }
}
console.log(fullName);
var cookies_1 = require("./cookies");
console.log(cookies_1.a);
var arr = [
    {
        name: "masab"
    },
];

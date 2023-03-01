//Function revised
function addition(n1, n2) {
    return n1 + n2;
}
// Arrow Function 
var calc = function (num1, num2) {
    // console.log("Hello");
    return num1 + num2;
};
// Task 1
// ADD
function add(num1, num2) {
    return num1 + num2;
}
;
// console.log(add(2,2));
var add1 = function (num1, num2) {
    return num1 + num2;
};
// console.log(add1(4,2));
// sub
function sub(num1, num2) {
    return num1 - num2;
}
;
// console.log(sub(4,2));
var sub1 = function (num1, num2) {
    return num1 - num2;
};
// console.log(sub1(3,2));
// Division
function div(num1, num2) {
    return num1 / num2;
}
;
// console.log(div(100,2));
var div1 = function (num1, num2) {
    return num1 / num2;
};
// console.log(div1(50,2));
// multiplication
function mutli(num1, num2) {
    return num1 * num2;
}
;
// console.log(mutli(4,2));
var multi1 = function (num1, num2) {
    return num1 * num2;
};
// console.log(multi1(6,2));
// If,Else and Else if statements
var age = 17;
if (age >= 18) {
    //  console.log("You are allowed");
}
else {
    // console.log("You are not allowed");
}
// prompt-sync
var mycountry = "Pak";
var correctAns = "Pakistan";
if (mycountry == correctAns) {
    // console.log("correct Answer");
}
else if (mycountry === "Pakista") {
    // console.log("Close Answer");
}
else if (mycountry === "Pak") {
    // console.log("Half correct Answer");
}
else {
    // console.log("Wrong Answer");
}
//Nested IF Statements
var country = "Pakistan";
var myage = 20;
if (country === "Pakistan") {
    if (myage >= 18) {
        // console.log("Here is your ticket");
    }
    else {
        console.log("Age restriction");
    }
}
else {
    console.log("Invalid Country");
}
// make quiz app 
//Array
var friuts = ["apple", "mango", "grapes", "watermelon"];
console.log(friuts);
console.log(friuts[3]);
var x = ["masab", 12, "mbz"];
console.log(x[0]);
var students = ["Piaic1", "Piaic2", "Piaic3", "Piaic4"];
// students.length; 
students.shift();
// students.pop(); 
// console.log(students.pop());
console.log(students.push("PIAIC5"));
console.log(students);

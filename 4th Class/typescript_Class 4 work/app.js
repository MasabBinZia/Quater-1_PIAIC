//Function revised
function addition(n1, n2) {
    return n1 + n2;
}
// Arrow Function 
let calc = (num1, num2) => {
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
let add1 = (num1, num2) => {
    return num1 + num2;
};
// console.log(add1(4,2));
// sub
function sub(num1, num2) {
    return num1 - num2;
}
;
// console.log(sub(4,2));
let sub1 = (num1, num2) => {
    return num1 - num2;
};
// console.log(sub1(3,2));
// Division
function div(num1, num2) {
    return num1 / num2;
}
;
// console.log(div(100,2));
let div1 = (num1, num2) => {
    return num1 / num2;
};
// console.log(div1(50,2));
// multiplication
function mutli(num1, num2) {
    return num1 * num2;
}
;
// console.log(mutli(4,2));
let multi1 = (num1, num2) => {
    return num1 * num2;
};
// console.log(multi1(6,2));
// If,Else and Else if statements
let age = 17;
if (age >= 18) {
    //  console.log("You are allowed");
}
else {
    // console.log("You are not allowed");
}
// prompt-sync
let mycountry = "Pak";
let correctAns = "Pakistan";
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
let country = "Pakistan";
let myage = 20;
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
let friuts = ["apple", "mango", "grapes", "watermelon"];
console.log(friuts);
console.log(friuts[3]);
let x = ["masab", 12, "mbz"];
console.log(x[0]);
let students = ["Piaic1", "Piaic2", "Piaic3", "Piaic4"];
// students.length; 
students.shift();
// students.pop(); 
// console.log(students.pop());
console.log(students.push("PIAIC5"));
console.log(students);

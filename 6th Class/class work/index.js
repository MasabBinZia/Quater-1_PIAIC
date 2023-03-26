// Loops Revision
//    nested loop 
for (let i = 0; i <= 1; i++) {
    //  console.log("Parent");
    for (let j = 0; j < 2; j++) {
        // console.log("child"); 
    }
}
let firstName = ["Sam-", "kenny-", "Simon-"];
let lastName = ["zzz", "tim", "john"];
let fullName = [];
for (let i = 0; i < firstName.length; i++) {
    for (let j = 0; j < lastName.length; j++) {
        fullName.push(firstName[i] + lastName[j]);
    }
}
console.log(fullName);
import { a } from "./cookies";
console.log(a);
let arr = [
    {
        name: "masab"
    },
];

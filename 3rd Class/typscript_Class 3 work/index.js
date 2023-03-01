// Task 1
var a = 11;
var b = 2;
var c = a / b;
// console.log(c);
// Task 2
//  Define string with the value "Imran is a good boy", 
// and split this srring to an array and sort it in asc and dsc order do not use any libaray.
// let sentence = "Imran is a good boy" ;
// let space = ' ' ;
// let array = [] ;
// let temp = '' ;
// for(let i of sentence){
//     if (i == space){
//         array.push(temp);
//         temp = ''
//     }
//     else{
//         temp += i
//     }
// }
// if (temp){
//     array.push(temp)
// }
// console.log(array)
// for (let i = 0 ; i < array.length ; i++){
//     for(let j = 0 ; j < array.length ; j++){
//         if(array[i] > array[j]){
//             temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }
// console.log(array);
var ab = 5;
// Primitive data types
/*string*/ var firstName1 = "Ali";
/*Number*/ var score = 25;
/*Boolean*/ var isMarried = false;
/*Undefined*/ var Undefined;
/*Null*/ var empty = null;
// Concetination
// Template Literals
var firstName = "Masab";
var lastName = "Bin Zia";
var fullName = "".concat(firstName, " ").concat(lastName);
//  console.log(fullName);
// How to check data type
var testVariable = 1;
// console.log(typeof testVariable);
// Operaters
//Arithmetic operater 
var str1 = 4;
var str2 = 2; //let str2 ="2" (Coversion)
// console.log(str1+str2);
// console.log(str1-str2);
// console.log(str1*str2);
// console.log(str1/str2);
// console.log(str1**str2);
// console.log(str1%str2);
// Assignments Operator
var nt = 5;
// console.log(nt); // 5
nt += 5;
// console.log(nt); // 10
nt -= 5;
// console.log(nt); // 5
// Comparision Operator
var nc = 5;
// console.log(nc == 5); //
// console.log(nc === 5); //
// console.log(nc != 5); //
// console.log(nc > 8); //
// console.log(nc < 8); //
// console.log(nc >= 8); //
// console.log(nc <= 8); // 
// logical Operator
var ny = 5;
// console.log(ny >= 5 && ny < 10); //
// console.log(ny > 5 && ny < 10); //
// console.log(ny >= 5 || ny < 10); //
// console.log(ny > 5 || ny < 10); //
// console.log(!(ny < 10)); //
// console.log(!(ny > 10)); // 
// Functions
// function greet(name:string){
//   console.log(`Hello ${name}`);
// }
// greet("MBZ");
// greet("Ali");
function greet1(name) {
    return "Hello ".concat(name);
}
var greeting1 = "Masab Mbz";
console.log(greeting1);
// Arrow Functions
// let sum = (n1:number,n2:number) =>
// {console.log(n1+n2),console.log(n1-n2);
// }
// sum(16,8);
// let sum1 = (n1:number,n2:number):number =>
// {console.log(n1+n2),console.log(n1-n2);
// }
// sum(16,8);

import promptSync from 'prompt-sync';
let prompt = promptSync();
//Task: Create a Function to Calculate the Factorial of a Number
let cal_Factorial = (num) => {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
};
const inputNumber = parseInt(prompt("Enter a number:"));
console.log(`The factorial of ${inputNumber} is ${cal_Factorial(inputNumber)}`);

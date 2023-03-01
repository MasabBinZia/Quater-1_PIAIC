// calculatorulator function Assignment
function calculator(num1:number, num2:number, operator:string) {
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-'){
        return num1 - num2    
    } else if (operator === '*'){
        return num1 * num2    
    } else if (operator === '/'){
        return num1 / num2    
    } 
}

let num1 = 30, num2 = 4
console.log(calculator(num1, num2, '+'))
console.log(calculator(num1, num2, '-'))
console.log(calculator(num1, num2, '*'))
console.log(calculator(num1, num2, '/'))






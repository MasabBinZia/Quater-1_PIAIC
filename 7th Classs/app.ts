const stdData = [
    {
    name :"Masab",
    age  :21,
    rollNumber : 12941
},
{
    name :"Ali",
    age  :25,
    rollNumber : 1234
}
]

// console.log(stdData[0].name);
// console.log(stdData[1].name);

import inquirer from 'inquirer';

const answer = await inquirer.prompt([{
    message : "what is your Name?",
    name : "fullName",
    type : "input"
},
{
    message : "what is your age?",
    name : "age",
    type : "input"
}
])

console.log(answer.fullName);




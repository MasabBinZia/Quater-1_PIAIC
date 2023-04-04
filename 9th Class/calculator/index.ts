import inquirer from "inquirer";
import { add } from "./add.js";

 const Answers =  await inquirer.prompt([
    {
        name:"num1",
        message:"Enter your First Number",
        type:"number"
    },
    {
        name:"num2",
        message:"Enter your Second Number",
        type:"number"
    },
]);

const result = add(Answers.num1,Answers.num2);
console.log(result)

// npm login 
// chalk from repo 
import inquirer from "inquirer";
import chalk from "chalk";

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log(chalk.green("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old."));


// union 
let firstName :string | null |number = "masab";
firstName =null;
firstName =1232

// narrowing 1st Method
let myAge :string |number ;
myAge=21;
console.log(myAge);



let newAge =Math.random()>0.6 ? "Masab" :21
console.log(newAge);
console.log(typeof newAge);

//2nd Method
if( typeof newAge === "string"){
    console.log(newAge.toUpperCase());
    
}

//3rd Method 
if( typeof newAge === "string"){
    console.log(newAge.toUpperCase());   
}else{
    console.log(newAge.toFixed(2));
    
}

// literal type 
let age :number |"died"|"unkwown";

let trafficLights : "red" | "green" |"yellow";


let yourName = Math.random() >0.6 ? "Masab" : undefined;
if(yourName){
    yourName.toUpperCase();
}

//Objects
let player ={
    name:"Cristanio Ronaldo",
    sports:"football",
    age:39
}

console.log(player.name);
console.log(player.sports);
console.log(player.age);

let student :{
    name : string,
    rollNumber:number
};

student={
    name:"Masab",
    rollNumber:12323
}

// type alias
type Teacher = {
    name:string;
    exp:number;
}

//interface
interface ITeacher {
    name:string;
    exp:number;
}

let principle : ITeacher ={
    name:"zeeshan",
    exp:10,
}

// nested objects
interface IAuthor{
    firstName :string;
    lastName :string;
}
interface IBook{
    author:IAuthor,
    book:IBook
}


const myBook ={
    author:{
        firstName : "Masab",
        lastName : "BinZia"
    }
}
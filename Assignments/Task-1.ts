import promptSync from 'prompt-sync';
const prompt = require('prompt-sync')();
//Taking prompt from User.
let englishMarks : number = parseInt(prompt("What is Your English Marks ? \n")); 
let mathsMarks   : number = parseInt(prompt("What is Your Maths   Marks ? \n")); 
let urduMarks    : number = parseInt(prompt("What is Your Maths   Marks ? \n")); 
let scieneMarks  : number = parseInt(prompt("What is Your Maths   Marks ? \n")); 
let pakstdMarks  : number = parseInt(prompt("What is Your Maths   Marks ? \n")); 

// Calculating Avg Marks 
let avgMarks  : number =(englishMarks+mathsMarks+urduMarks+scieneMarks+pakstdMarks)/5; 

//Conditions for Grading according to the avgMarks
if(avgMarks > 80){
  console.log(`Your Grade is "A" and your marks are ${avgMarks}`);
}else if (avgMarks >=70 && avgMarks <80 ){
    console.log(`Your Grade is "B" and your marks are ${avgMarks}`)
}else if (avgMarks >=60 && avgMarks<70 ){
    console.log(`Your Grade is "C" and your marks are ${avgMarks}`);
}else if (avgMarks >=50 && avgMarks<60){
    console.log(`Your Grade is "D" and your marks are ${avgMarks}`);
}else{
    console.log(`Your Grade is "F",Marks ${avgMarks}`);
}


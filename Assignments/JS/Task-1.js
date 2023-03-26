import promptSync from 'prompt-sync';
let prompt = promptSync();
//Task: Create a Program to Calculate Student Grades
//Taking prompt from User.
let englishMarks = parseInt(prompt("What is Your English Marks ? \n"));
let mathsMarks = parseInt(prompt("What is Your Maths Marks ? \n"));
let urduMarks = parseInt(prompt("What is Your Urdu Marks ? \n"));
let scieneMarks = parseInt(prompt("What is Your Science Marks ? \n"));
let pakstdMarks = parseInt(prompt("What is Your PakistanStudies Marks ? \n"));
// Calculating Avg Marks 
let avgMarks = (englishMarks + mathsMarks + urduMarks + scieneMarks + pakstdMarks) / 5;
//Conditions for Grading according to the avgMarks
if (avgMarks > 80) {
    console.log(`Your Grade is "A" and your marks are ${avgMarks}`);
}
else if (avgMarks >= 70 && avgMarks < 80) {
    console.log(`Your Grade is "B" and your marks are ${avgMarks}`);
}
else if (avgMarks >= 60 && avgMarks < 70) {
    console.log(`Your Grade is "C" and your marks are ${avgMarks}`);
}
else if (avgMarks >= 50 && avgMarks < 60) {
    console.log(`Your Grade is "D" and your marks are ${avgMarks}`);
}
else {
    console.log(`Your Grade is "F",Marks ${avgMarks}`);
}

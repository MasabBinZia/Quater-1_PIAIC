// Importing the prompt-sync package
const prompt = require('prompt-sync')();
// Adding Questions in an array.
const questions = [
    "Which planet in our solar system has the most moons?",
    "What is the capital city of Australia?",
    "What is the highest mountain peak in Africa?",
    "Who wrote the novel (To Kill a Mockingbird)?"
];
// Adding Answer in an array.
const Answer = [
    "Jupiter", "Canberra", "Kilimanjaro", "Harper Lee"
];
// Give user its score by checking the answers of the questions.
let points = 0;
const user_Ans1 = prompt(`${questions[0]}\nA.Earth\nB.Jupiter\nC.Mars\n`) || "";
if (user_Ans1.toLowerCase() === Answer[0].toLowerCase()) {
    points += 25;
}
const user_Ans2 = prompt(`${questions[1]}\nA.Karachi\nB.New York\nC.Canberra\n`) || "";
if (user_Ans2.toLowerCase() === Answer[1].toLowerCase()) {
    points += 25;
}
const user_Ans3 = prompt(`${questions[2]}\nA.Kilimanjaro\nB.Mount Elgon\nC.Mount Kenya\n`) || "";
if (user_Ans3.toLowerCase() === Answer[2].toLowerCase()) {
    points += 25;
}
const user_Ans4 = prompt(`${questions[3]}\nA.(J.K.)Rowling\nB.Harper Lee\nC.Jane Austen\n`) || "";
if (user_Ans4.toLowerCase() === Answer[3].toLowerCase()) {
    points += 25;
}
if (points >= 75) {
    console.log(`Excellent,Your points are ${points}/100! `);
}
else if (points >= 50) {
    console.log(`Not Bad,Your points are ${points}/100!`);
}
else {
    console.log(`Poor,Your points are ${points}/100!`);
}

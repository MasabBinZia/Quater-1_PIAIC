// function revised
function sum(num1, num2) {
    var r = num1 + num2;
    return r;
}
var result = sum(111, 8);
// console.log(result);
if (result > 100) {
    // console.log("this num is large");
}
// Array -splice and slicing Arrays
var fruits = ["apple", "mango", "banna", "orange"];
fruits.push(1);
// console.log(fruits);
var colours = ["red", "blue", "green", "yellow"];
colours.splice(2, 0, "purple", "black"); //1st argument is where to start ,2nd argument what to delete ,3rd argument what to add in array.
// console.log(colours);
var cars = ["Honda", "BMW", "Toyota", "Mercedes"];
var car = cars.slice(1, 3);
// console.log(car);
function add(num1, num2) {
    if (num2 === void 0) { num2 = 4; }
    return num1 + num2;
}
add(2);
// Loops
//for loops
for (var i = 0; i < 3; i++) {
    // console.log("Hello Word");
}
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Multan"];
for (var i = 0; i < cleanestCities.length; i++) {
    // console.log(cleanestCities[i]);
    if ("Islamabad" === cleanestCities[i]) {
        console.log("yes it in the list");
        break;
    }
    else {
        console.log("city not found");
    }
}

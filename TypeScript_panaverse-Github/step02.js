//use const where variable values do not change
var a1 = 5;
var b1 = 33;
var c1 = "best";
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
    var z = 4;
    //use z
}
else {
    //use z
}
console.log("let: " + z); // Error: z is not defined in this scope

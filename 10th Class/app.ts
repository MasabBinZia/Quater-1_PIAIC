let ball: { diameter: number } = { diameter: 10 };
let sphere: { diameter: number } = { diameter: 20 };

sphere = ball;
ball = sphere;

interface Tube {
    diameter: number;
    length: number;
}

let tube: Tube = { diameter: 12, length: 3 };
//   tube = ball;//Error
ball = tube;

let myType = { name: "masab", id: 1 };
myType = { id: 2, name: "Tom" };

let myType2 = { id: 2,  name: "Tom" };
myType = myType2;

var myType4 = { id: 2,  name: "Tom", age: 22 };
myType = myType4;


var x: { id: number, [y: string]: any };
x = { id: 1, fullname: "mbz" };


type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}


interface Student {
    student_id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}
    
type intersected_type = Student & Teacher;
    
let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
    
console.log(obj1.teacher_Id);
console.log(obj1.name);

// Any

let myval: any;

myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK

//Unknown

let value: unknown;

value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK


function error(message: string): never {
    throw new Error(message);
  }
   
  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }
   
  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }

  let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string> myname).length)


enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
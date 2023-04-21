class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class square {
    pt;
    num1;
    constructor(pt, num) {
        this.pt = pt;
        this.num1 = num;
    }
    // class square {
    //     pt: Point;
    //     num1: number;
    //     constructor(pt: Point, num: number);
    //     constructor(pt: Point, num: number);
    //     constructor(pt: Point, num: number) {
    //         this.pt = pt;
    //         this.num1 = num;
    //     }
    printPoint() {
        console.log(`Your Point is:`, pt);
    }
}
const pt = new Point(20, 10);
const pt2 = new Point(30, 40);
const sq1 = new square(pt, 21);
sq1.printPoint();
console.log(pt);
console.log(pt2);
//41:23
class Greeter {
    name = "world";
    constructor(otherName) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}
//error 
//     err() {
//       this.name = "not ok";  
//     }
//   }
//   const g = new Greeter();
//   g.name = "also not ok";
class Point1 {
    constructor(xs, y) {
    }
}
class Base {
    k = 4;
    constructor(kval) {
        this.k = kval;
    }
}
class Derived extends Base {
    q = 3;
    constructor() {
        super(2);
    }
}
const obj1 = new Derived();
console.log(obj1);
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log(`Slithering`);
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 43) {
        console.log(`Galloping`);
        super.move(distanceInMeters);
    }
}
const sam = new Snake("Sammy the Python");
sam.move();
export {};

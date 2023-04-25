/* ------ getter setter -----*/
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        if (value > 0) {
            this._length = value;
        }
    }
}
const obj = new C();
obj.length = 1;
console.log(obj.length);
/* ----- Index Signatures ----- */
class MyClass {
    // myname ="masab"error
    myname = true;
    check(s) {
        return this[s];
    }
}
const obj1 = new MyClass();
console.log(obj1.check("myname"));
class Ship {
    addSonar(pingable) {
        console.log(pingable);
    }
}
class Sonar {
    ping() {
        console.log("ping!");
    }
    pong() {
        console.log("pong!");
    }
}
class Sonar2 {
    ping() {
        console.log("ping!" + "ping!");
    }
    pong() {
        console.log("pong! pong! ");
    }
}
const obj2 = new Sonar();
/* ----- Extends Clauses ----- */
class Animal {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
class Base {
    greet1() {
        console.log("Hello, world!");
    }
}
class Derived extends Base {
    greet1(name) {
        if (name === undefined) {
            super.greet1();
        }
        else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}
const E = new Derived();
E.greet1();
E.greet1("reader");
/* ----- Member Visibility ----- */
class Greeter {
    greet() {
        console.log("hi!");
    }
}
const g = new Greeter();
g.greet();
export {};

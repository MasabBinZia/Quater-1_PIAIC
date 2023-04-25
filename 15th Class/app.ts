/* ------ getter setter -----*/
class C {
  _length = 0
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
  [s: string]: boolean | ((s: string) => boolean);

  // myname ="masab"error
  myname = true

  check(s: string) {
    return this[s] as boolean;
  }
  // check2(s: boolean) { error 
  //   return this[s] as boolean;
  // }
}
const obj1 = new MyClass()
console.log(obj1.check("myname"));

/* ----- implements Clauses ----- */

interface Pingable {
  ping(): void;

}
class Ship {
  addSonar(pingable: Pingable) {
    console.log(pingable);
  }
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
  pong() {
    console.log("pong!");
  }
}
class Sonar2 implements Pingable {
  ping() {
    console.log("ping!" + "ping!");
  }
  pong() {
    console.log("pong! pong! ");
  }
}




const obj2 = new Sonar()


/* ----- Extends Clauses ----- */

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
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
  greet1(name?: string) {
    if (name === undefined) {
      super.greet1();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const E = new Derived();
E.greet1();
E.greet1("reader");

/* ----- Member Visibility ----- */

class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();

class Greeter1 {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter1 {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + super.getName());
  }
}
const as = new SpecialGreeter();
as.greet(); // OK
// as.getName(); error 


/* ===== Memeber Visiblity ====== */

class Greeter {
    private name: string = "Masab"
    greet() {
        console.log(`HI! ${this.name}`);
    }
}

const obj1 = new Greeter();
obj1.greet();


class Greeter1 {
    public greet1() {
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

const obj2 = new Greeter1();
obj2.greet1();


/* ===== Static Members ====== */

class MyClass {
    static x = 0;
    printX() {
        console.log(MyClass.x);
    }
}
//   console.log(MyClass.x);
//   MyClass.printX();
const obj3 = new MyClass();
MyClass.x


class User {
    static staticId: number = 0;
    id: number;
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.id = ++User.staticId;
        this.name = name;
        this.age = age;
    }
};



const u1 = new User("Masab", 21)
console.log(u1);
const u2 = new User("Hamzah", 22)
console.log(u2);
const u3 = new User("Mujtaba", 10)
console.log(u3);
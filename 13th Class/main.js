function add(arg1, arg2) {
    return arg1 = arg2;
}
add("d", "a");
// add(2,"masab")
console.log(add(1, 2));
console.log(add("Hello", "world"));
console.log(add(true, false));
var tuple = [1, "bob"];
var secondElement = tuple[1];
const fn = () => {
    return ["", 21];
};
const fn2 = () => {
    return {
        name: "masab"
    };
};
const { name } = fn2();
console.log(name);
const [str, num] = fn();
console.log(num);
console.log(str);
/*Program OOP */
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const pt = new Point(4, 6);
const pt2 = new Point(7, 1);
class Human {
    name;
    eatenfoods = [];
    constructor(name) {
        this.name = name;
        this.eatenfoods = [];
    }
    eat(food) {
        this.eatenfoods.push(food);
    }
}
class Food {
    name;
    quantity;
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}
const masab = new Human("Masab");
const Biryani = new Food("Biryani", 3);
masab.eat(Biryani);
console.log(masab.eatenfoods);
export {};

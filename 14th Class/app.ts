class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }


}

class square {
    pt: Point;
    num1: number;
    constructor(pt: Point, num: number) {
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
    readonly name: string = "world";
   
    constructor(otherName?: string) {
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
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
    }
  }


  class Base {
    k = 4;
    constructor(kval:number){
        this.k =kval;
    }
  }
   
  class Derived extends Base {
    q : number = 3;
    constructor() {  
      super(2);
    }
  }

  const obj1 = new Derived ()
  console.log(obj1);
  

  class Animal{
    name :string;
    constructor(name:string){
        this.name =name;
    }
    move(distanceInMeters :number =0 ){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
        
    }
  }

  class Snake extends Animal{
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters= 5){
        console.log(`Slithering`);
        super.move(distanceInMeters)
    }
  }

  class Horse extends Animal{
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters =43){
        console.log(`Galloping`);
        super.move(distanceInMeters)
        
    }
  }

  const sam = new Snake("Sammy the Python")
  sam.move();
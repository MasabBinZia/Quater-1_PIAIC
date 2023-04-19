
function add (arg1:string,arg2:string):string;
function add (arg1:number,arg2:number):number;
function add (arg1:boolean,arg2:boolean):boolean;
function add (arg1:any,arg2:any):any{
  return arg1=arg2;
}
add("d","a")
// add(2,"masab")
console.log(add(1,2));
console.log(add("Hello","world"));
console.log(add(true,false));

var tuple :[number,string]=[1,"bob"]
var secondElement = tuple[1]

const fn =():[string,number]=>{
    return ["",21]
}
const fn2 =():{name :string,age:number}=>{
  return{
 name :"masab",
 age: 21,
  }
}

const {name,age} =fn2();
console.log(name);
console.log(age);



const [str,num] = fn()
console.log(num);
console.log(str);



 
/*Program OOP */
class Point {
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}

const pt=new Point(4,6);
const pt2 =new Point(7,1);

class Human{
 name :string;
 eatenfoods : Food[]=[];
 constructor(name:string){
   this.name =name;
   this.eatenfoods=[];
 }
 eat(food:Food){
    this.eatenfoods.push(food);
 }
}
class Food{
    name :string;
    quantity:number;
    constructor(name:string,quantity:number){
      this.name =name;
      this.quantity=quantity;
    }
}


const masab = new Human("Masab");
const Biryani = new Food("Biryani",3);

masab.eat(Biryani);
console.log(masab.eatenfoods);


// 42:58
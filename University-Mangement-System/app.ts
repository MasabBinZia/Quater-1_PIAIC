class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
};

class Student extends Person {
    rollNum: number;
    courses: Course[] = [];

    constructor(name: string, age: number, rollNum: number) {
        super(name, age)
        this.rollNum = rollNum;
    }
    registerForCourses(course: Course) {
        this.courses.push(course);
    }
};

class Instructor extends Person {
    salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    }
    assignCourse(course: Course) {
        this.courses.push(course);
    }
};

class Course {
    id: number;
    name: string;
    students: Student[] = []
    instructor: Instructor[] = []

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(std: Student) {
        this.students.push(std)
        std.registerForCourses
    }

    setInstructor(inst: Instructor) {
        this.instructor.push(inst)
    }
}

class Department {
    name: string;
    courses: Course[] = [];
    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course) {
        this.courses.push(course);
    }
}


const std1 = new Student("Masab", 21, 12941);
const std2 = new Student("Mustafa", 14, 1212);

const inst1 = new Instructor("Zafar", 56, 200000);
const inst2 = new Instructor("Tayyab", 35, 150000);

const course1 = new Course(1, "Programming Fundamentals");
const course2 = new Course(2, "Object Oriented Programming")

const dept1 = new Department("Computer Science")


course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);

course1.setInstructor(inst1);
course2.setInstructor(inst2)

dept1.addCourse(course1);
dept1.addCourse(course2);



console.log(course1.students);
console.log(dept1.courses);

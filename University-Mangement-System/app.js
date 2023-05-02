class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class Student extends Person {
    rollNum;
    courses = [];
    constructor(name, age, rollNum) {
        super(name, age);
        this.rollNum = rollNum;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
;
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
;
class Course {
    id;
    name;
    students = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
        std.registerForCourses;
    }
    setInstructor(inst) {
        this.instructor.push(inst);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const std1 = new Student("Masab", 21, 12941);
const std2 = new Student("Mustafa", 14, 1212);
const inst1 = new Instructor("Zafar", 56, 200000);
const inst2 = new Instructor("Tayyab", 35, 150000);
const course1 = new Course(1, "Programming Fundamentals");
const course2 = new Course(2, "Object Oriented Programming");
const dept1 = new Department("Computer Science");
course1.addStudent(std1);
course1.addStudent(std2);
course2.addStudent(std1);
course1.setInstructor(inst1);
course2.setInstructor(inst2);
dept1.addCourse(course1);
dept1.addCourse(course2);
console.log(course1.students);
console.log(dept1.courses);
export {};

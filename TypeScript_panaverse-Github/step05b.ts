// anonymous

let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Masab",
    age: 21
}

console.log(`Student Name - ${student["name"]}`);
console.log(`Student Age -${student.age}`);


// Interfaces

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal"
}

console.log(`Store Manager Name - ${storeManager["name"]}`);



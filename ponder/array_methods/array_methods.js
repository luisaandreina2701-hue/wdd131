
//1. Js arrays

let names = ["Olive", "Luisa", "Thomas"];
console.log(names);
console.log(names[1])
console.log(names[2])
console.log(names[names.length - 1])

let ages = [10, 19, 18]

let mixArray = ["Olive", 10, "Luisa", 19, "Thomas", 18]

console.log(mixArray)

//2. Js objects

let students = {
    //Key value pairs
    name: "Bob",
    class: "WDD131",
    grade = "A",
    age: 19
}

console.log(students)
console.log(students.class)

//3. Array methods

names.forEach(() =>{
    //This code executes once per
    console.log
    
})

//Map function returns a New array with values fromg funsctio

let newNameArray = name.map((name) => {
    return name + "Warner"
})

console.log(newNameArray)

function lastNameFunction(name){
    return name + "Warner"
}

//Filter funtion return a new array with filtered values
let filteredArray = names.filter ((name){
    //Filters return boolean. True Keep

    return name[0] === 'C'
    return name.includes('e')
})


//AGREGAR .REDUCE
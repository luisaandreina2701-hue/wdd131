/* 
const names = ["James","Bob","Josh"] 

names.sort(); //Sort ordena Alfabeticamente, cuando capitalizas totalmente una palabra procede a ir de primero

console.log(names);
*/

const people = [{name: "James", age: 33},
                {name: "Bob", age: 12},
                {name:"Josh", age: 47}] 

people.sort(sortPeopleByName); 
console.log(people);

function sortPeopleByName(a,b){

    console.log("A: " + a.name)
    console.log("B: " + b.name)

    if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
    }else if(a.name.toLowerCase() > b.name.toLowerCase()){
        return 1 ;
    }
    return 0 ;
}
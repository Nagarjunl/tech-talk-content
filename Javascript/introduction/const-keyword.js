const age = 25;
age = 25 // Type Error - age is read-only


{
  let name = 'Nagarjun'
}

console.log(name) // Reference error - name is not defined


const marks = [80, 73, 80, 81, 98]

marks[0] = 85 // Valid mutation for const array
marks = [] // results in error


const person = {
  name: "Prabu",
  age: 30,
}

person = {} // Results in error
person.name = "Prabu King" // valid mutation for const objects

//for Array and Object data types, const allows you to change the value of the index/key. Not allows the new assignment to the variable

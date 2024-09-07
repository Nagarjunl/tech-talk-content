//1. Creation phase - creating variables, functions. etc in the memory
//2. Execution phase - Assigning values to variables, invoking functions, mutating varibales of different types
//   data types like objects, arrays and creating objects from classes(new keyword)

let name = "Sathish";

//"kumar"

name = "kumar";

const marks = [45, 55]; //index-based

console.log(marks);

marks[0] = 65;

console.log(marks);

marks[1] = 75;
marks[2] = 55;

let person = {
  name: "John",
  marks: [],
  show: function (person) {},
  address: {
    state: "NY",
  },
}; // key-value pairs

//dot(.) notation to access properties(keys in object)

person.name = "Kan";

console.log(person);

person.address.state = "Washington"; //Mutating the value of person.address.state

person.address.state; //access property(key) in person.address.state object

// const let var

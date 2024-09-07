console.log(person); // results in error because let won't  allow to access before declaration
let person = {
  name: "John",
};

let name = "Sathish";

name = person.name;

console.log(age); // undefined
var age = 25;
console.log(age); // 25

// console.log(name);  // let and const doesnt support hoisting
// let name = "John"; // Temporal Dead Zone(TDZ)

sum(2, 3); // 5

function sum(a, b) {
  // function supports hoisting
  console.log(a + b);
}

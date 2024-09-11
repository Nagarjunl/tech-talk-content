average(2, 3);
function average(a, b) {
  console.log((a + b) / 2);
}

const sum = (a, b) => console.log(a + b); // arrow function
sum(23, 45);

const sayHello = function (name, age) {
  // function expression or anonymous function
  console.log("Hello " + name + "Age: " + age);
};

sayHello("John", 24);

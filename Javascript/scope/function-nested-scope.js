const name = "Hello";

function sayHello() {
  let age = 20;
  console.log(age);
  function inner() {
    age = 25;
    console.log(age); //output
  }
  console.log(age);
  inner();
  console.log(age); // 25
}

sayHello();

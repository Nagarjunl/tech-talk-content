const name = "sathish";

const person = {
  name: "John",
  age: 21,
  marks: [24, 25, 26, 27, 28, 29, 30, 31],
  address: {
    state: "Tamil Nadu",
  },
  show: function () {
    console.log(this.name, this.marks);
  },
};

console.log(name);

console.log(person);

console.log(person.address);

function sayHello() {
  console.log("Hello " + age);
}

sayHello();

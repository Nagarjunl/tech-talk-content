class Person {

  constructor(name) {
    this.name = name;
  }

  show() {
    console.log(this);
  }

  getName() {
    return this.name;
  }

  updateName(name) {
    this.name = name;
  }

  display() {
    console.log(this.name); //concatenation(+ operator for string only)
  }
}

const p = new Person("john");
p.updateName("Rajesh");

// {
//     name: 'john',
//     age: 22,
//     show: function() {
//         console.log(this);
//     },
//     display: function() {
//         console.log(this.name);
//     }
// }
const newPerson = new Person("sathish");

// {
//     name: 'sathish',
//     age: 22,
//     show: function() {
//         console.log(this);
//     },
//     display: function() {
//         console.log(this.name);
//     }
// }

function display() {
  console.log(this.prompt());
}

const returnValue = p.display();
console.log(returnValue);

# Built-in-classes and Shorthands

## String
// let name = 'sathish'; //shorthand

let name = new String('sathish');
## Accessing `String` datatype methods
console.log(name.split(''))

# Simplified example of Class and Object creation
<img width="715" alt="image" src="https://github.com/user-attachments/assets/58183719-f72b-444b-b692-204cc45eeb98">

class Person {
  constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender
  }
  
  getName() {
    console.log(this.name);
  } 
  
  changeName(name) {
    this.name = name;
  }
  
  getAge() {
    console.log(this.age)
  }
}


const jeevika = new Person('Jeevika', 20, 'female');
jeevika.getName()
jeevika.changeName('Jeevikamathi');
jeevika.getAge();
// const priya = new Person('Priya', 24, 'female');
// priya.getName();
// const sathish = new Person('Sathishkumar', 35, 'female');
// sathish.getName();

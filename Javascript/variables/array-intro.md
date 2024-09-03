# Array

## Creating new array

const marks = [85, 73, 80, 81, 98];

## Accessing values from `marks` array using its index
console.log(marks[4]);

## Rules
1. Values are stored using index which starts at 0;
  <img width="986" alt="image" src="https://github.com/user-attachments/assets/a09b6b00-1834-4003-a027-6c458c441f6f">

2. To access or change the value stored in array, we should use index; eg: marks[3], marks[3] = 45
<img width="872" alt="image" src="https://github.com/user-attachments/assets/45db663d-5830-41f8-b01a-8353b3cc23aa">

3. To access the length of the `Array` , we can use `length` property
  ``marks.length``


## Array of objects
<img width="299" alt="image" src="https://github.com/user-attachments/assets/8e3fa212-1b7e-4613-8989-1ff375d7eb33">

const students = [
  {
    name: "sathish",
    age: 35,
    isMarried: true,
    address: {
      street: "main",
      door: "23/5",
      state: "Tamil Nadu",
      pincode: 600001,
    },
    marks: [84, 85, 35, 68, 43],
  },
  {
    name: "ranjith",
    age: 20,
    isMarried: false,
    address: {
      street: "second",
      door: "2/5",
      state: "Karnataka",
      pincode: 560001,
    },
    marks: [84, 85, 35, 68, 43],
  },
];

console.log(students[1].address.state);

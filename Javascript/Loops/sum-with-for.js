const marks = [85, 73, 80, 81, 98]; // length = 5

//How to calculate sum of marks array

//Create a varible using let and add initial value as zero(0)

let total = 0; //417

// Use for loop to iterate over the marks array and calculate sum by adding current index value
// and add the current value to above created total varible repeatedly
for (let i = 0; i < marks.length; i++) {
  total = total + marks[i];
}

console.log(total);

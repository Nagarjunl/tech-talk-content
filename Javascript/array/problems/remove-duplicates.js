const values = [24, 35, 45, 23, 24, 45];
//using for each
function removeDuplicates(array) {
  let newArray = [];
  //use for loop
  array.forEach((element, index) => {
    if (array.indexOf(element) === index) {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(removeDuplicates(values));
//using filter method
console.log(
  values.filter(function (element, index, array) {
    return array.indexOf(element) === index;
  })
);

//using set
console.log(new Set(values));


console.log("==================================");

let arr = [24, 25, 25, 24, 26, 27];

let newValues = new Set(arr);
console.log(newValues);


console.log("==================================");

let nonDup = [];
for (let i = 0; i < arr.length; i++) {
  console.log(`${arr.indexOf(arr[i])} === ${i}`);
  if (arr.indexOf(arr[i]) === i) {
    nonDup.push(arr[i])
  }
}

console.log(nonDup);

console.log("==================================");

console.log(arr.filter((element, index) => arr.indexOf(element) === index))

console.log("==================================");

let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = arr[i];
  }
}

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.keys(obj).toString());
console.log(Object.keys(obj).toString().split(","));

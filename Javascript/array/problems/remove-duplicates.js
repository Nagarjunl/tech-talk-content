const values = [24, 35, 45, 23, 24, 45];

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

console.log(
  values.filter(function (element, index, array) {
    return array.indexOf(element) === index;
  })
);

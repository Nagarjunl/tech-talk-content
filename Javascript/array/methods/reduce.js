const marks = [85, 73, 80, 81, 98];

const cb = function (accumulator, currentValue, indexPosition) {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
};
const total = marks.reduce(function (accumulator, currentValue, indexPosition) {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
});

console.log(total);

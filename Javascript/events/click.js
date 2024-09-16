const button = document.querySelector("#button");

button.addEventListener("mouseleave", function () {
  console.log("mouese leave event triggered");
});

button.addEventListener("click", function () {
  console.log("click event triggered");
});

button.addEventListener("mouseleave", function () {
  console.log("mouese leave event 2nd triggered");
});

button.addEventListener("mouseleave", function () {
  console.log("mouese leave event 3rd triggered");
});

button.addEventListener("mouseleave", (event) => {
  console.log(event);
  console.log("mouese leave event 4th triggered");
});

button.addEventListener("click", function () {
  console.log("2nd click event triggered");
});

const p = document.querySelector("p");
let count = 1;
p.addEventListener("click", function () {
  console.log(`P clicked ${count++} times`);
});

document.querySelector("body").addEventListener("click", function (event) {
  console.log(event);
  console.log(`<body> clicked`);
});

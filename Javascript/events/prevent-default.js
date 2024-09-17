// console.log(document.querySelectorAll("input"));
document.querySelector("input").addEventListener("keypress", function (e) {
  console.log("input keypress", e.keyCode);
  // if (e.keyCode == 13) e.preventDefault();
});

document.querySelector("button").addEventListener("click", function (e) {
  console.log("submit button clicked", e);
  // e.preventDefault();
});

document.querySelector("form").addEventListener("submit", function (submit) {
  console.log("form submit", submit);
});

document.querySelector("form").addEventListener("keypress", function (submit) {
  console.log("form keypress - bubble working", submit);
});

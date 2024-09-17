document.querySelector("input").addEventListener("input", function (event) {
  const text = event.target.value;
  const p = document.querySelector("#name");
  p.textContent = text;
});

document.querySelector("input").addEventListener("focus", function (event) {
  event.preventDefault();

  console.log("focus event fired", event);
});

document.querySelector("input").addEventListener("blur", function (event) {
  console.log("blur event fired", event);
});

console.log(document.querySelector("input"));

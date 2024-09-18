const res = fetch("https://jsonplaceholder.typicode.com/todos/");

res
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
    const todos = document.querySelector("#todos");
    json.forEach((element, index) => {
      const p = document.createElement("p");
      p.textContent = `${index + 1} ${element.title}`;
      p.style.color = element.completed ? "green" : "red";
      todos.appendChild(p);
    });
  })
  .catch(function (err) {
    console.log("error", err);
  });

console.log("1");

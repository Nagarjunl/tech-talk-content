fetch("http://localhost:3000")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
    const p = document.createElement("p");
    p.textContent = json.address.location.state;
    document.querySelector("body").appendChild(p);
  })
  .catch(function (err) {
    console.log("error", err);
    console.log("failed to fetch data");
    const p = document.createElement("p");
    p.textContent = err.message;
    document.querySelector("body").appendChild(p);
  });

console.log("1");

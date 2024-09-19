async function fetchData() {
  const fetchApi = await fetch("http://localhost:3000");
  console.log("after await");
  console.log(fetchApi);

  const res = await fetchApi.json();
  if (fetchApi.ok) {
    console.log(res);
    const p = document.createElement("p");
    p.textContent = res.message;
    document.querySelector("body").appendChild(p);
  } else {
    console.log("failed to fetch data");
    const p = document.createElement("p");
    p.textContent = res.message;
    document.querySelector("body").appendChild(p);
  }
}

fetchData();

setTimeout(() => {
  const p = document.createElement("p");
  p.textContent = "After timeout";
  document.querySelector("body").appendChild(p);
  console.log(fetchApi);
}, 10000);

console.log("After fetching data api call");

let count = 0;
// for (let i = 0; i < 500000; i++) {
//   console.log(i);
// }
document.querySelector("button").addEventListener("click", () => {
  count++;
  document.querySelector("label#count").textContent = count;
});
console.log("count: " + count);

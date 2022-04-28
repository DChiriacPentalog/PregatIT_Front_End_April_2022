console.log("hello world");

var a;
function abc() {}
let b;
const c = 1;

let x = 0;
if (true) {
  x = 10;
} else {
  x = 20;
}

let y = true ? 10 : 20;

switch ("a") {
  case "a":
    console.log("aaaa");
    break;

  default:
    console.log("bbb");
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log("------");

for (let x in ["a", "b", "c"]) {
  console.log(x);
}

console.log("------");

for (let x in { 0: "a", 1: "b", 2: "c" }) {
  console.log(x);
}

console.log("------");

for (let x of ["a", "b", "c"]) {
  console.log(x);
}

console.log("------");

for (let x of Object.values({ 0: "a", 1: "b", 2: "c" })) {
  console.log(x);
}

console.log("------");

let it = 0;
while (it < 4) {
  console.log(it++);
}

console.log("------");

console.log(
  "forEach",
  ["a", "b", "c"].forEach((value, index, arr) => {
    console.log(value, index, arr);
  })
);

let resultat = ["a", "b", "c"].map((value, index, arr) => {
  return value + index;
});
console.log("map", resultat);

resultat = [1, 2, 3].reduce((acc, value, index, arr) => {
  console.log(acc);
  return acc + value;
}, 10);
console.log("reduce", resultat);

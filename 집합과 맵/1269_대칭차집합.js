let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1269_대칭차집합.txt"
  )
  .toString()
  .trim()
  .split("\n");

let A = new Set(input[1].split(" ").map((el) => +el));
let B = new Set(input[2].split(" ").map((el) => +el));

console.log(
  +[...A].filter((a) => !B.has(a)).length +
    +[...B].filter((b) => !A.has(b)).length
);

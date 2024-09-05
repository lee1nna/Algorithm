let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1764_듣보잡.txt"
  )
  .toString()
  .trim()
  .split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
let NMap = new Map();

for (let i = 0; i < N; i++) {
  NMap.set(input[i], i);
}

const noListenAndSee = input
  .splice(N, N + M)
  .filter((el) => NMap.get(el) !== undefined)
  .sort((a, b) => (a > b ? 1 : -1));

console.log(noListenAndSee.length);
console.log(noListenAndSee.join("\n"));

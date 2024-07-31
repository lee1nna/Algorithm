let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./25305_커트라인.txt"
  )
  .toString()
  .trim();

const [N, K] = input
  .split("\n")[0]
  .split(" ")
  .map((el) => +el);

const students = input
  .split("\n")[1]
  .split(" ")
  .sort((a, b) => +b - +a)
  .map((el) => +el);

console.log(students[K - 1]);

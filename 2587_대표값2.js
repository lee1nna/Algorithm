let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./2587_대표값2.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

let sortedArr = input.sort((a, b) => a - b);
let sum = input.reduce((prev, cur) => prev + cur, 0);

console.log(sum / 5);
console.log(sortedArr[2]);

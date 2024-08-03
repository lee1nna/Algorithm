let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./2751_수정렬하기2.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const N = input.shift();
const sortedArr = input.sort((a, b) => a - b);

console.log(sortedArr.join("\n"));

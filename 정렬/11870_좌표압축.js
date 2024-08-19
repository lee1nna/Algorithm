let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./11870_좌표압축.txt"
  )
  .toString()
  .trim()
  .split("\n");

let arr = input[1].split(" ").map((el) => +el);
let sortedArr = [...new Set(arr)].sort((a, b) => a - b);

let indexMap = {};
sortedArr.forEach((val, idx) => {
  indexMap[val] = idx;
});

console.log(arr.map((val) => indexMap[val]).join(" "));

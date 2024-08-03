let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1427_소트인사이드.txt"
  )
  .toString()
  .trim();

let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i]);
}

console.log(arr.sort((a, b) => +b - +a).join(""));

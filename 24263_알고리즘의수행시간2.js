const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./24263_알고리즘의수행시간2.txt"
  )
  .toString()
  .trim();

console.log(input * input);
console.log(2);

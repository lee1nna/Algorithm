let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./13241_최소공배수2.txt"
  )
  .toString()
  .trim()
  .split("\n");

const gcdFunc = (a, b) => {
  if (b === 0) return a;
  else return gcdFunc(b, a % b);
};

const [A, B] = input[0].split(" ").map(Number);
console.log((A * B) / gcdFunc(A, B));

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1934_최소공배수.txt"
  )
  .toString()
  .trim()
  .split("\n");

const caseNum = input.shift();

const gcdFunc = (a, b) => {
  if (b === 0) return a;
  else return gcdFunc(b, a % b);
};

input.forEach((ab) => {
  const [A, B] = ab.split(" ").map(Number);
  console.log((A * B) / gcdFunc(A, B));
});

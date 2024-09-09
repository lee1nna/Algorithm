let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1735_분수 합.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [num1, deno1] = input[0].split(" ").map((el) => +el);
const [num2, deno2] = input[1].split(" ").map((el) => +el);

const gcdFunc = (a, b) => {
  if (b === 0) return a;
  else return gcdFunc(b, a % b);
};

let addDeno = deno1 * deno2; // 합한 분모
let addNum = num1 * deno2 + num2 * deno1; // 합한 분자
let gcd = gcdFunc(addNum, addDeno); // 최대공약수

console.log(gcd ? `${addNum / gcd} ${addDeno / gcd}` : `${addNum} ${addDeno}`);

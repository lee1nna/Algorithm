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
  let min = a > b ? b : a;
  let temp = 0;

  for (let i = 2; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      temp = i;
    }
  }

  return temp;
};

let addDeno = deno1 * deno2; // 합한 분모
let addNum = num1 * deno2 + num2 * deno1; // 합한 분자
let gcd = gcdFunc(addDeno, addNum); // 최대공약수

console.log(gcd ? `${addNum / gcd} ${addDeno / gcd}` : `${addNum} ${addDeno}`);

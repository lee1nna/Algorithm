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

let addNum; // 합한 분자
let addDeno; // 합한 분모
let gcd; // 최대공약수

if (deno1 === deno2) {
  // 분모가 같을 경우
  addNum = num1 + num2;
  addDeno = deno1;
  gcd = gcdFunc(addNum, addDeno);

  if (gcd) {
    console.log(addNum / gcd, addDeno / gcd);
  } else {
    console.log(addNum, addDeno);
  }
} else if (deno1 !== deno2 && (deno1 % deno2 === 0 || deno2 % deno1 === 0)) {
  // 분모가 같지 않지만 배수 관계인 경우
  if (deno1 % deno2 === 0) {
    addNum = num2 * (deno1 / deno2) + num1;
    addDeno = deno1;
    gcd = gcdFunc(addNum, addDeno);
  } else if (deno2 % deno1 === 0) {
    addNum = num1 * (deno2 / deno1) + num2;
    addDeno = deno2;
    gcd = gcdFunc(addNum, addDeno);
  }

  if (gcd) {
    console.log(addNum / gcd, addDeno / gcd);
  } else {
    console.log(addNum, addDeno);
  }
} else if (deno1 !== deno2 && deno1 % deno2 !== 0 && deno2 % deno1 !== 0) {
  // 분모도 다르고 배수 관계도 아닐 경우
  addNum = num1 * deno2 + num2 * deno1;
  addDeno = deno1 * deno2;
  gcd = gcdFunc(addNum, addDeno);
  if (gcd) {
    console.log(addNum / gcd, addDeno / gcd);
  } else {
    console.log(addNum, addDeno);
  }
}

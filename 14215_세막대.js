const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./14215_세막대.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

console.log(input);
const [a, b, c] = input;
let max = Math.max(a, b, c);
const idx = input.findIndex((el) => el === max);
let remainArr = input.filter((_, index) => index !== idx);
const remainSum = remainArr.reduce((prev, cur) => prev + cur, 0);

// 삼각형 조건이 안되는 경우
if (max >= remainSum) {
  max = max - (max - remainSum + 1);
  console.log(remainSum + max);
} else {
  let sum = input.reduce((prev, cur) => prev + cur, 0);
  console.log(sum);
}

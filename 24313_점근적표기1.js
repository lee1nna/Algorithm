const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./24313_점근적표기1.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [a1, a0] = input[0].split(" ").map((el) => +el);
const c = +input[1];
const n = +input[2];
let isOk = false;

for (let i = n; i <= 100; i++) {
  if (a1 * i + a0 > c * i) {
    isOk = true;
    break;
  }
}

console.log(isOk ? 0 : 1);

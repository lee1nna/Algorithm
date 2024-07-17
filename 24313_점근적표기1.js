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

if (a1 * n + a0 <= c * n) {
  console.log(1);
} else {
  console.log(0);
}

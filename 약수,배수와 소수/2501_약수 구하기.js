const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./2501_약수 구하기.txt"
  )
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const N = input[0];
const K = input[1];
let factors = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    factors.push(i);
  }
}

if (factors.length <= K - 1) {
  console.log(0);
} else {
  console.log(factors[K - 1]);
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2581_소수.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const [M, N] = input;
let decimal = [];

for (let i = M; i <= N; i++) {
  let factors = 0;

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      factors += 1;
    }
  }

  if (factors === 2) {
    decimal.push(i);
  }
}

let decimalSum = decimal.reduce((prev, cur) => {
  return prev + cur;
}, 0);

if (decimal.length === 0) {
  console.log(-1);
} else {
  console.log(decimalSum);
  console.log(decimal[0]);
}

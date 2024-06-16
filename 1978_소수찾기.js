const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./1978_소수찾기.txt"
  )
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map((el) => +el);

let decimal = 0; // 소수의 갯수

input.forEach((n) => {
  let factors = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors += 1;
    }
  }

  if (factors === 2) {
    decimal += 1;
  }

  factors = 0;
});

console.log(decimal);

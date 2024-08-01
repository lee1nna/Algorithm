const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./9506_약수들의 합.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

let factors = [];

input.forEach((el) => {
  if (el === -1) {
    return;
  }

  for (let i = 1; i <= el; i++) {
    if (el !== i && el % i === 0) {
      factors.push(i);
    }
  }

  let sum = factors.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // 완전수
  if (el === sum) {
    console.log(el + " = " + factors.join(" + "));
  } else {
    console.log(el + " is NOT perfect.");
  }

  factors = [];
});

const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./5073_삼각형과세변.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));

input.forEach((arr) => {
  let [a, b, c] = arr;
  let max = Math.max(a, b, c);
  let idx = arr.findIndex((el) => el === max);
  let remainSum = arr
    .filter((_, index) => {
      return index !== idx;
    })
    .reduce((prev, cur) => {
      return prev + cur;
    }, 0);

  if (a === 0 && b === 0 && c === 0) {
    return;
  }

  if (remainSum > 0 && remainSum <= max) {
    console.log("Invalid");
  } else {
    if (a === b && b === c && a === c) {
      console.log("Equilateral");
    } else if (a === b || b === c || c === a) {
      console.log("Isosceles");
    } else if (a !== b && b !== c && c !== a) {
      console.log("Scalene");
    }
  }
});

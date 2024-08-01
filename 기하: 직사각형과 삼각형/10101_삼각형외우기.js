const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./10101_삼각형외우기.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const [a, b, c] = input;

if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
  return;
}

if (a + b + c === 180 && (a === b || b === c || a === c)) {
  console.log("Isosceles");
  return;
}

if (a + b + c === 180 && (a !== b || b !== c || a !== c)) {
  console.log("Scalene");
  return;
}

if (a + b + c !== 180 && (a !== b || b !== c || a !== c)) {
  console.log("Error");
  return;
}

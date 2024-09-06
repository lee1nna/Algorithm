let input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./11478_서로 다른 부분 문자열의 개수.txt"
  )
  .toString()
  .trim()
  .split("\n");

let inputArr = input[0].split("");
let stringArr = [];

inputArr.forEach((char, i) => {
  inputArr.forEach((char, j) => {
    if (j + 1 + i <= inputArr.length) {
      stringArr.push(input[0].slice(j, j + 1 + i));
    }
  });
});

console.log(new Set(stringArr).size);

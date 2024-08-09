let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./11650_좌표정렬하기2.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
let posArr = input.map((el) => el.split(" ").map((el) => +el));

posArr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

console.log(
  posArr
    .map((el) => el)
    .join("\n")
    .replaceAll(",", " ")
);

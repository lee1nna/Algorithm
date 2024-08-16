let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./10814_나이순정렬.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const arr = input.map((el) => el.split(" "));

arr.forEach((a, idx) => {
  a.push(idx);
});

arr
  .sort((a, b) => {
    if (+a[0] === +b[0]) {
      return a[2] - b[2];
    } else {
      return +a[0] - +b[0];
    }
  })
  .map((el) => el.splice(-1, arr.length - 1));

console.log(arr.map((el) => el.join(" ")).join("\n"));

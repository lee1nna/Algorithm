let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./10815_숫자카드.txt"
  )
  .toString()
  .trim()
  .split("\n");

let [N, nArr, M, mArr] = input;

nArr = nArr.split(" ");
mArr = mArr.split(" ");

let obj = {};

nArr.forEach((arr, idx) => {
  obj[arr] = idx;
});

console.log(mArr.map((arr) => (obj[arr] !== undefined ? 1 : 0)).join(" "));
